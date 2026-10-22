#!/usr/bin/env python3
"""
analyze_video.py — phân tích cách dựng và cách dùng âm thanh của một video mẫu.

Cách chạy (một lệnh):
    python3 analyze_video.py VIDEO.mp4 THU_MUC_RA [--transcript loi-thoai.txt]
        [--cut-thr 4.0] [--silence-db -35] [--silence-min 0.3]

Cần: ffmpeg, ffprobe, python3 + numpy, pillow, matplotlib (không cần librosa).

Ra trong THU_MUC_RA:
    tong-hop.json        mọi số liệu (thông số, cảnh, độ to, dải tần, giọng, nhạc, tiếng động)
    canh.csv             danh sách cảnh: số, bắt đầu, kết thúc, độ dài, kiểu chuyển, ảnh
    lang.csv             khoảng lặng (silencedetect)
    ngung.csv            chỗ ngừng giữa câu (ước lượng theo năng lượng giọng)
    tieng-dong.csv       tiếng động nghi là sfx (2 loại: đột biến kênh bên; cao tần kéo dài như gõ chữ), cờ trùng cắt cảnh
    loi-thoai-moc.csv    (khi có --transcript) mốc thời gian ƯỚC LƯỢNG cho từng dòng lời thoại
    anh/pho-giua-ben-30s.png  phổ kênh giữa/kênh bên 30 s đầu + vạch cắt cảnh + vạch tiếng động
    anh/tieng-dong.png   khung hình ngay sau mỗi tiếng động (xem âm gắn với hình gì)
    anh/bang-canh-*.png  contact sheet (mỗi cảnh 1 khung giữa cảnh)
    anh/mo-dau-15s.png   15 giây đầu, 2 khung/giây
    anh/ket-30s.png      30 giây cuối, 1 khung/giây
    anh/do-to.png        đường độ to M/S (LUFS) + vạch cắt cảnh + mức nền
    anh/dai-tan.png      năng lượng theo dải tần + tỉ lệ kênh bên (side/mid)
    anh/pho-toan-bo.png  spectrogram toàn video
    anh/pho-30s.png      spectrogram 30 giây đầu
    anh/nhip-canh.png    độ dài từng cảnh theo thời gian
"""
import argparse, json, os, re, subprocess, sys, csv, math
import numpy as np

FF = "ffmpeg"; FP = "ffprobe"


def run(cmd, binary=False):
    p = subprocess.run(cmd, stdout=subprocess.PIPE, stderr=subprocess.PIPE)
    return p.stdout if binary else (p.stdout.decode("utf-8", "replace") + p.stderr.decode("utf-8", "replace"))


def fmt(t):
    m = int(t // 60); s = t - 60 * m
    return f"{m}:{s:05.2f}"


# ---------------------------------------------------------------- 1. thông số
def probe(path):
    out = run([FP, "-v", "error", "-show_entries",
               "format=duration,bit_rate:stream=codec_type,codec_name,width,height,r_frame_rate,sample_rate,channels,bit_rate",
               "-of", "json", path])
    j = json.loads(out[out.index("{"):])
    info = {"duration": float(j["format"]["duration"]), "bit_rate": int(j["format"].get("bit_rate", 0))}
    for s in j["streams"]:
        if s["codec_type"] == "video" and "width" not in info:
            n, d = s["r_frame_rate"].split("/")
            info.update(vcodec=s["codec_name"], width=s["width"], height=s["height"], fps=float(n) / float(d))
        if s["codec_type"] == "audio" and "acodec" not in info:
            info.update(acodec=s["codec_name"], sample_rate=int(s["sample_rate"]), channels=s["channels"])
    w, h = info.get("width", 1), info.get("height", 1)
    info["orientation"] = "ngang" if w > h else ("dọc" if h > w else "vuông")
    g = math.gcd(w, h); info["aspect"] = f"{w // g}:{h // g}"
    return info


# ---------------------------------------------------------------- 2. hình
def read_frames(path, w, h, fps):
    """Giải mã toàn bộ video ở kích thước nhỏ, trả về mảng (N,h,w,3) uint8."""
    cmd = [FF, "-v", "error", "-i", path, "-vf", f"fps={fps},scale={w}:{h}", "-pix_fmt", "rgb24", "-f", "rawvideo", "-"]
    raw = run(cmd, binary=True)
    n = len(raw) // (w * h * 3)
    return np.frombuffer(raw[: n * w * h * 3], np.uint8).reshape(n, h, w, 3)


def phase_shift(a, b):
    """Độ dịch toàn cục giữa hai khung xám (phase correlation)."""
    A = np.fft.fft2(a - a.mean()); B = np.fft.fft2(b - b.mean())
    R = A * np.conj(B); R /= np.abs(R) + 1e-9
    r = np.fft.ifft2(R).real
    y, x = np.unravel_index(np.argmax(r), r.shape)
    if y > a.shape[0] // 2: y -= a.shape[0]
    if x > a.shape[1] // 2: x -= a.shape[1]
    return x, y, r.max()


def detect_scenes(frames, fps, cut_thr, min_len):
    f = frames.astype(np.float32)
    gray = f.mean(axis=3)
    N = len(f)
    d = np.zeros(N, np.float32)
    d[1:] = np.abs(f[1:] - f[:-1]).mean(axis=(1, 2, 3))
    # khác biệt histogram (ít nhạy với chuyển động hơn)
    hists = np.stack([np.concatenate([np.histogram(fr[..., c], 16, (0, 256))[0] for c in range(3)]) for fr in frames]).astype(np.float32)
    hists /= hists.sum(1, keepdims=True)
    hd = np.zeros(N, np.float32); hd[1:] = np.abs(hists[1:] - hists[:-1]).sum(1) / 2 * 3
    luma = gray.mean(axis=(1, 2))
    win = int(fps)  # 1 giây
    cuts = []  # (frame, kind, score)
    for i in range(1, N):
        lo, hi = max(1, i - win), min(N, i + win)
        loc = np.median(d[lo:hi]) + 1.0
        score = d[i] / loc
        if d[i] > 10 and score > cut_thr and hd[i] > 0.15 and d[i] >= d[max(1, i - 1):min(N, i + 2)].max():
            cuts.append([i, "cắt thẳng", float(score)])
    # chuyển cảnh từ từ: khác biệt dài hạn lớn nhưng không có một khung nhảy lớn
    k = max(3, int(fps * 0.33))
    dl = np.zeros(N, np.float32)
    dl[k:N - k] = np.abs(f[2 * k:] - f[:N - 2 * k]).mean(axis=(1, 2, 3))
    hard = np.array([c[0] for c in cuts]) if cuts else np.array([-10 ** 9])
    i = k
    while i < N - k:
        if dl[i] > 35 and np.min(np.abs(hard - i)) > 2 * k and d[i - k:i + k].max() < 0.5 * dl[i]:
            j = i
            while j < N - k and dl[j] > 25: j += 1
            seg = slice(i - k, j + k)
            c = (i + j) // 2
            if dl[c] < dl[i:j + 1].max(): c = i + int(np.argmax(dl[i:j + 1]))
            lmin = luma[seg].min(); lend = min(luma[i - k], luma[min(N - 1, j + k)])
            if lmin < 20 and lmin < lend - 15: kind = "mờ qua đen (fade)"
            elif luma[seg].max() > 235 and luma[seg].max() > max(luma[i - k], luma[min(N - 1, j + k)]) + 15: kind = "chớp trắng (flash)"
            else:
                sx, sy, _ = phase_shift(gray[c - 1], gray[c + 1])
                kind = "trượt/đẩy (slide)" if (abs(sx) + abs(sy)) >= 2 else "hoà tan / hiệu ứng (dissolve)"
            cuts.append([c, kind, float(dl[c])])
            i = j + k
        else:
            i += 1
    cuts.sort()
    # gộp cắt quá gần
    merged = []
    for c in cuts:
        if merged and c[0] - merged[-1][0] < min_len * fps:
            if c[2] > merged[-1][2] and merged[-1][1] == c[1]: merged[-1] = c
            continue
        merged.append(c)
    bounds = [0] + [c[0] for c in merged] + [N]
    kinds = ["(đầu video)"] + [c[1] for c in merged]
    scenes = []
    for s in range(len(bounds) - 1):
        a, b = bounds[s], bounds[s + 1]
        if b <= a: continue
        inner = d[a + 1:b] if b - a > 2 else np.array([0.0])
        drift = float(np.abs(f[min(b - 1, a + 2)] - f[max(a, b - 3)]).mean()) if b - a > 6 else 0.0
        scenes.append(dict(idx=len(scenes) + 1, start=a / fps, end=b / fps, dur=(b - a) / fps, transition_in=kinds[s],
                           motion=float(np.mean(inner)), drift=drift, luma=float(luma[a:b].mean())))
    return scenes, d, luma


def grab_frames(path, times, w, h):
    """Lấy khung ở các mốc thời gian (một lượt giải mã)."""
    fps = 10
    raw = run([FF, "-v", "error", "-i", path, "-vf", f"fps={fps},scale={w}:{h}", "-pix_fmt", "rgb24", "-f", "rawvideo", "-"], binary=True)
    n = len(raw) // (w * h * 3)
    arr = np.frombuffer(raw[: n * w * h * 3], np.uint8).reshape(n, h, w, 3)
    return [arr[min(n - 1, int(round(t * fps)))] for t in times]


def contact_sheet(imgs, labels, out, cols=5, title=None):
    from PIL import Image, ImageDraw, ImageFont
    h, w = imgs[0].shape[:2]
    pad, lab = 6, 22
    rows = math.ceil(len(imgs) / cols)
    top = 30 if title else 0
    sheet = Image.new("RGB", (cols * (w + pad) + pad, top + rows * (h + lab + pad) + pad), (24, 24, 28))
    dr = ImageDraw.Draw(sheet)
    try:
        font = ImageFont.truetype("/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf", 15)
        tfont = ImageFont.truetype("/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf", 18)
    except Exception:
        font = tfont = ImageFont.load_default()
    if title: dr.text((pad, 6), title, fill=(255, 255, 255), font=tfont)
    for k, (im, lb) in enumerate(zip(imgs, labels)):
        r, c = divmod(k, cols)
        x, y = pad + c * (w + pad), top + pad + r * (h + lab + pad)
        sheet.paste(Image.fromarray(im), (x, y + lab))
        dr.text((x + 2, y + 2), lb, fill=(255, 220, 120), font=font)
    sheet.save(out)


# ---------------------------------------------------------------- 3. âm thanh
def ebur128(path):
    import tempfile
    tmp = tempfile.mkdtemp()
    p = subprocess.run([FF, "-hide_banner", "-nostats", "-i", os.path.abspath(path), "-vn", "-af",
                        "ebur128=peak=true:metadata=1,ametadata=print:file=m.txt", "-f", "null", "-"],
                       stdout=subprocess.PIPE, stderr=subprocess.PIPE, cwd=tmp)
    out = p.stderr.decode("utf-8", "replace")
    T, M, S = [], [], []
    t = None
    for line in open(os.path.join(tmp, "m.txt"), encoding="utf-8"):
        if line.startswith("frame:"):
            t = float(line.split("pts_time:")[1])
        elif line.startswith("lavfi.r128.M="):
            T.append(t); M.append(float(line.split("=")[1]))
        elif line.startswith("lavfi.r128.S="):
            S.append(float(line.split("=")[1]))
    M = [m if m > -120 else -np.inf for m in M]; S = [s if s > -120 else -np.inf for s in S]
    summ = out[out.rfind("Summary:"):]
    g = lambda pat: float(re.search(pat, summ, re.S).group(1)) if re.search(pat, summ, re.S) else None
    return dict(I=g(r"I:\s*(-?[\d.]+) LUFS"), LRA=g(r"LRA:\s*([\d.]+) LU"), true_peak=g(r"Peak:\s*(-?[\d.]+) dBFS")), np.array(T), np.array(M), np.array(S)


def silences(path, db, mind):
    out = run([FF, "-hide_banner", "-nostats", "-i", path, "-vn", "-af", f"silencedetect=noise={db}dB:d={mind}", "-f", "null", "-"])
    st = [float(x) for x in re.findall(r"silence_start: (-?[\d.]+)", out)]
    en = [(float(a), float(b)) for a, b in re.findall(r"silence_end: ([\d.]+) \| silence_duration: ([\d.]+)", out)]
    return [dict(start=max(0, s), end=e, dur=dd) for s, (e, dd) in zip(st, en)]


def load_audio(path, sr=22050):
    raw = run([FF, "-v", "error", "-i", path, "-vn", "-ac", "2", "-ar", str(sr), "-f", "f32le", "-"], binary=True)
    x = np.frombuffer(raw, np.float32).reshape(-1, 2)
    return x, sr


def stft_mag(x, sr, n=2048, hop=512):
    win = np.hanning(n).astype(np.float32)
    nf = 1 + (len(x) - n) // hop
    idx = np.arange(n)[None, :] + hop * np.arange(nf)[:, None]
    out = np.empty((nf, n // 2 + 1), np.float32)
    for s in range(0, nf, 4000):
        out[s:s + 4000] = np.abs(np.fft.rfft(x[idx[s:s + 4000]] * win, axis=1))
    return out, np.fft.rfftfreq(n, 1 / sr), hop / sr


def db(p):
    return 10 * np.log10(np.maximum(p, 1e-12))


def f0_track(mid, sr, frame=0.04, hop=0.02, vmask=None, tframe=None):
    n, h = int(frame * sr), int(hop * sr)
    lo, hi = int(sr / 400), int(sr / 60)
    f0 = []
    for i in range(0, len(mid) - n, h):
        t = i / sr
        if vmask is not None:
            k = min(len(vmask) - 1, int(t / tframe))
            if not vmask[k]: continue
        seg = mid[i:i + n] - mid[i:i + n].mean()
        e = (seg ** 2).sum()
        if e < 1e-4: continue
        ac = np.correlate(seg, seg, "full")[n - 1:]
        ac /= ac[0]
        lag = lo + int(np.argmax(ac[lo:hi]))
        if ac[lag] > 0.55:
            # tránh lỗi bát độ: ưu tiên chu kỳ ngắn hơn nếu đủ mạnh
            half = lag // 2
            if half >= lo and ac[half] > 0.85 * ac[lag]: lag = half
            f0.append((t, sr / lag))
    return np.array(f0)


def runs(mask, tstep, min_len):
    """Các đoạn liên tiếp True trong mask -> [(start,end)]."""
    out, s = [], None
    for i, v in enumerate(np.append(mask, False)):
        if v and s is None: s = i
        if not v and s is not None:
            if (i - s) * tstep >= min_len: out.append((s * tstep, i * tstep))
            s = None
    return out


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("video"); ap.add_argument("out")
    ap.add_argument("--transcript"); ap.add_argument("--cut-thr", type=float, default=4.0)
    ap.add_argument("--silence-db", type=float, default=-35); ap.add_argument("--silence-min", type=float, default=0.3)
    ap.add_argument("--min-shot", type=float, default=0.4)
    a = ap.parse_args()
    os.makedirs(os.path.join(a.out, "anh"), exist_ok=True)
    A = lambda p: os.path.join(a.out, "anh", p)
    R = {}
    info = probe(a.video); R["thong_so"] = info
    dur = info["duration"]; fps_a = min(30, round(info.get("fps", 30)))
    print("[1] thông số:", info)

    # ---- hình
    print("[2] giải mã hình ...")
    fr = read_frames(a.video, 96, 54, fps_a)
    scenes, d, luma = detect_scenes(fr, fps_a, a.cut_thr, a.min_shot)
    del fr
    L = np.array([s["dur"] for s in scenes])
    R["canh"] = dict(so_canh=len(scenes), so_cat=len(scenes) - 1, trung_binh=float(L.mean()), trung_vi=float(np.median(L)),
                     ngan_nhat=float(L.min()), dai_nhat=float(L.max()),
                     phan_bo={"<1s": int((L < 1).sum()), "1-2s": int(((L >= 1) & (L < 2)).sum()), "2-4s": int(((L >= 2) & (L < 4)).sum()),
                              "4-8s": int(((L >= 4) & (L < 8)).sum()), "8-15s": int(((L >= 8) & (L < 15)).sum()), ">=15s": int((L >= 15).sum())},
                     kieu_chuyen={k: sum(1 for s in scenes[1:] if s["transition_in"] == k) for k in set(s["transition_in"] for s in scenes[1:])},
                     cat_moi_phut_theo_doan=[])
    cut_times = np.array([s["start"] for s in scenes[1:]])
    seg = 30.0
    for t0 in np.arange(0, dur, seg):
        n = int(((cut_times >= t0) & (cut_times < t0 + seg)).sum())
        R["canh"]["cat_moi_phut_theo_doan"].append(dict(tu=float(t0), den=float(min(dur, t0 + seg)), so_cat=n, cat_moi_phut=n * 60 / min(seg, dur - t0)))
    print(f"    {len(scenes)} cảnh, TB {L.mean():.2f}s, trung vị {np.median(L):.2f}s")

    # khung đại diện + contact sheet
    print("[2b] lấy khung đại diện ...")
    mids = [min(dur - 0.05, s["start"] + s["dur"] / 2) for s in scenes]
    first15 = list(np.arange(0.25, min(15, dur), 0.5))
    last30 = list(np.arange(max(0, dur - 30) + 0.5, dur - 0.1, 1.0))
    imgs = grab_frames(a.video, mids + first15 + last30, 320, 180)
    m_imgs, f_imgs, l_imgs = imgs[:len(mids)], imgs[len(mids):len(mids) + len(first15)], imgs[len(mids) + len(first15):]
    per = 40
    sheets = []
    for p in range(0, len(scenes), per):
        name = f"bang-canh-{p // per + 1:02d}.png"
        contact_sheet(m_imgs[p:p + per], [f"#{s['idx']} {fmt(s['start'])} ({s['dur']:.1f}s)" for s in scenes[p:p + per]], A(name), cols=5,
                      title=f"Cảnh {p + 1}–{min(len(scenes), p + per)} (khung giữa cảnh)")
        sheets.append(name)
    for s, nm in zip(scenes, [sheets[i // per] for i in range(len(scenes))]): s["anh"] = nm
    contact_sheet(f_imgs, [f"{t:.2f}s" for t in first15], A("mo-dau-15s.png"), cols=6, title="15 giây đầu, 2 khung/giây")
    contact_sheet(l_imgs, [fmt(t) for t in last30], A("ket-30s.png"), cols=6, title="30 giây cuối, 1 khung/giây")

    # ---- âm thanh: độ to
    print("[3] độ to (ebur128) ...")
    loud, T, M, S = ebur128(a.video); R["do_to"] = loud
    Sv = S[np.isfinite(S) & (S > -70)]
    R["do_to"]["short_term_p10_p50_p90"] = [float(np.percentile(Sv, q)) for q in (10, 50, 90)] if len(Sv) else None
    sil = silences(a.video, a.silence_db, a.silence_min)
    R["lang"] = dict(nguong_db=a.silence_db, toi_thieu_s=a.silence_min, so_lan=len(sil), tong_s=float(sum(s["dur"] for s in sil)),
                     dai_nhat=float(max([s["dur"] for s in sil], default=0)))

    # ---- âm thanh: phổ, dải tần, giữa/bên
    print("[4] phổ và dải tần ...")
    x, sr = load_audio(a.video)
    mid = (x[:, 0] + x[:, 1]) / 2; side = (x[:, 0] - x[:, 1]) / 2
    Mm, freqs, tstep = stft_mag(mid, sr); Ms, _, _ = stft_mag(side, sr)
    P, Ps = Mm ** 2, Ms ** 2
    band = lambda lo, hi, PP=P: db(PP[:, (freqs >= lo) & (freqs < hi)].sum(1))
    b_low, b_voice, b_high = band(20, 200), band(300, 3400), band(5000, sr / 2)
    b_all = db(P.sum(1)); s_all = db(Ps.sum(1))
    tt = np.arange(len(P)) * tstep

    # VAD: năng lượng dải giọng cao hơn nền cục bộ (p10 trong 3 s) >= 9 dB, và có tính điều hoà
    w3 = int(3 / tstep)
    floor = np.array([np.percentile(b_voice[max(0, i - w3):i + w3], 10) for i in range(0, len(b_voice))])
    peak = np.array([np.percentile(b_voice[max(0, i - w3):i + w3], 90) for i in range(0, len(b_voice))])
    vad = b_voice > floor + 0.5 * (peak - floor)
    vad &= b_voice > np.percentile(b_voice, 20)
    # hangover 120 ms để nối các âm tiết
    hv = int(0.12 / tstep)
    vad_s = np.convolve(vad.astype(float), np.ones(2 * hv + 1), "same") > 0
    speech_runs = runs(vad_s, tstep, 0.15)
    speech_time = float(sum(e - s for s, e in speech_runs))
    pauses = [(speech_runs[i][1], speech_runs[i + 1][0]) for i in range(len(speech_runs) - 1) if speech_runs[i + 1][0] - speech_runs[i][1] >= 0.2]
    pd_ = np.array([e - s for s, e in pauses]) if pauses else np.array([0.0])

    # nền (nhạc) trong các khoảng ngừng của giọng so với lúc có giọng
    nonv = ~vad_s
    gap_lvl = b_all[nonv]; sp_lvl = b_all[vad_s]
    gap_side = s_all[nonv]; sp_side = s_all[vad_s]
    R["giong_va_nen"] = dict(
        thoi_gian_co_giong_s=speech_time, ti_le_co_giong=speech_time / dur,
        muc_khi_co_giong_db=float(np.median(sp_lvl)), muc_trong_khoang_ngung_db=float(np.median(gap_lvl)),
        chenh_giong_tren_nen_db=float(np.median(sp_lvl) - np.median(gap_lvl)),
        do_deu_nen_trong_ngung_std_db=float(np.std(gap_lvl)),
        kenh_ben_side_so_voi_giua_db=float(np.median(s_all) - np.median(b_all)),
        side_khi_co_giong_db=float(np.median(sp_side)), side_trong_ngung_db=float(np.median(gap_side)),
        nang_luong_dai_tan_median_db={"<200Hz": float(np.median(b_low)), "300-3400Hz": float(np.median(b_voice)), ">5kHz": float(np.median(b_high))},
        duoi_200_trong_ngung_db=float(np.median(b_low[nonv])), duoi_200_khi_co_giong_db=float(np.median(b_low[vad_s])),
    )
    # thay đổi nhạc: so phổ trung bình của kênh bên (hoặc nền) giữa các cửa sổ 4 s
    win = int(4 / tstep)
    ref = Ps if R["giong_va_nen"]["kenh_ben_side_so_voi_giua_db"] > -25 else P
    lf = (freqs > 40) & (freqs < 4000)
    vecs, vt = [], []
    for i in range(0, len(ref) - win, win // 2):
        sl = slice(i, i + win)
        msk = nonv[sl] if ref is P else np.ones(win, bool)
        if msk.sum() < 5: continue
        v = db(ref[sl][msk][:, lf].mean(0)); v = v - v.mean()
        vecs.append(v); vt.append((i + win / 2) * tstep)
    changes = []
    if len(vecs) > 3:
        V = np.array(vecs)
        dist = np.array([np.sqrt(np.mean((V[i + 1] - V[i]) ** 2)) for i in range(len(V) - 1)])
        thr = np.median(dist) + 3 * np.median(np.abs(dist - np.median(dist))) * 1.4826
        for i in np.where(dist > thr)[0]:
            changes.append(dict(t=float((vt[i] + vt[i + 1]) / 2), khoang_cach=float(dist[i])))
    side_lvl_seg = []
    for t0 in np.arange(0, dur, 30):
        m = (tt >= t0) & (tt < t0 + 30)
        side_lvl_seg.append(dict(tu=float(t0), side_db=float(np.median(s_all[m])) if m.any() else None,
                                 nen_trong_ngung_db=float(np.median(b_all[m & nonv])) if (m & nonv).any() else None,
                                 giong_db=float(np.median(b_all[m & vad_s])) if (m & vad_s).any() else None))
    R["nhac"] = dict(diem_doi_nghi_van=changes, theo_doan_30s=side_lvl_seg)

    # tiếng động ngắn: spectral flux (>2 kHz) trên kênh bên và kênh giữa
    hfm = freqs > 2000
    def flux(MM):
        L_ = np.log1p(MM[:, hfm] * 100)
        fl = np.zeros(len(L_)); fl[1:] = np.maximum(L_[1:] - L_[:-1], 0).sum(1)
        return fl
    fl_side, fl_mid = flux(Ms), flux(Mm)
    def peaks(fl, k, mind=0.25):
        med = np.median(fl); mad = np.median(np.abs(fl - med)) * 1.4826 + 1e-9
        z = (fl - med) / mad
        cand = np.where((z > k) & (z >= np.maximum.reduce([np.roll(z, s) for s in range(-3, 4)])))[0]
        out = []
        for c in cand:
            if out and (c - out[-1]) * tstep < mind: continue
            out.append(c)
        return [(c * tstep, float(z[c])) for c in out]
    side_on = peaks(fl_side, 12)
    # (b) âm cao tần kéo dài 0,3–2 s ở kênh giữa: tiếng gõ chữ, âm hiệu, "ding" — lời nói chỉ có âm xì ngắn
    from numpy.lib.stride_tricks import sliding_window_view as swv
    hfb = band(5000, min(11000, sr / 2))
    kk = int(0.3 / tstep) | 1
    sus = swv(np.pad(hfb, (kk // 2, kk // 2), mode="edge"), kk).min(-1)
    on = sus > np.median(hfb) + 14
    hf_ev = []
    for s0, e0 in runs(on, tstep, 0.01):
        s0, e0 = s0 - 0.15, e0 + 0.15
        if hf_ev and s0 - hf_ev[-1][1] < 0.3: hf_ev[-1] = (hf_ev[-1][0], e0)
        else: hf_ev.append((s0, e0))
    events = [(t, z, "đột biến kênh bên (whoosh/hit)", 0.0) for t, z in side_on] + \
             [(s0, float(sus[int(s0 / tstep) + 3:int(e0 / tstep)].max() - np.median(hfb)), "cao tần kéo dài (gõ chữ/âm hiệu)", e0 - s0) for s0, e0 in hf_ev]
    events.sort()
    trans = []
    for t, z, kind, ln in events:
        k = min(len(vad_s) - 1, int(max(0, t) / tstep))
        near_cut = float(np.min(np.abs(cut_times - t))) if len(cut_times) else 99
        trans.append(dict(t=max(0.0, t), z=z, loai=kind, dai_s=ln, gan_cat_canh_s=near_cut, trung_cat=near_cut <= 0.2,
                          dang_co_giong=bool(vad_s[k])))
    # nhịp nhạc (bpm) ước lượng từ đường bắt nhịp của kênh bên
    tempo = []
    fps_s = 1 / tstep
    for t0 in np.arange(0, dur - 10, 20):
        e = fl_side[int(t0 * fps_s):int((t0 + 20) * fps_s)]; e = e - e.mean()
        if len(e) < 50: continue
        ac = np.correlate(e, e, "full")[len(e) - 1:]; lags = np.arange(len(ac)) / fps_s
        msk = (lags > 0.4) & (lags < 1.0)
        if not msk.any() or ac[0] <= 0: continue
        tempo.append(dict(tu=float(t0), bpm=float(60 / lags[msk][np.argmax(ac[msk])]), do_ro=float(ac[msk].max() / ac[0])))
    # nhạc khi không có giọng (đoạn ≥ 2 s không lời) so với lúc có giọng
    nv_runs = runs(~vad_s, tstep, 2.0)
    R["nhac"] = R.get("nhac", {})
    R["nhac_khong_loi"] = [dict(tu=float(s0), den=float(e0), muc_db=float(np.median(b_all[int(s0 / tstep):int(e0 / tstep)])),
                                so_voi_luc_co_giong_db=float(np.median(b_all[int(s0 / tstep):int(e0 / tstep)]) - np.median(sp_lvl))) for s0, e0 in nv_runs]
    R["nhip_nhac"] = tempo
    # tỉ lệ trùng kỳ vọng nếu ngẫu nhiên
    exp_rate = min(1.0, len(cut_times) * 0.4 / dur)
    R["tieng_dong"] = dict(so_luong=len(trans), theo_loai={k: sum(1 for t in trans if t["loai"] == k) for k in set(t["loai"] for t in trans)},
                           trung_cat_canh=sum(t["trung_cat"] for t in trans),
                           ti_le_trung=(sum(t["trung_cat"] for t in trans) / len(trans)) if trans else 0, ti_le_trung_neu_ngau_nhien=exp_rate,
                           cat_canh_co_tieng_dong=int(sum(1 for c in cut_times if any(abs(c - t["t"]) <= 0.2 for t in trans))))

    # giọng: F0
    print("[5] cao độ giọng ...")
    f0 = f0_track(mid, sr, vmask=vad_s, tframe=tstep)
    if len(f0):
        F = f0[:, 1]
        st = 12 * np.log2(F / np.median(F))
        R["giong"] = dict(f0_trung_vi_hz=float(np.median(F)), f0_p10_p90=[float(np.percentile(F, 10)), float(np.percentile(F, 90))],
                          bien_do_ngu_dieu_st=float(np.std(st)), so_khung=int(len(F)),
                          gioi_tinh_uoc_luong="nữ" if np.median(F) > 180 else ("nam" if np.median(F) < 160 else "không rõ"))
        # nhiều giọng? phân phối F0 theo từng đoạn 20 s
        segm = []
        for t0 in np.arange(0, dur, 20):
            m = (f0[:, 0] >= t0) & (f0[:, 0] < t0 + 20)
            if m.sum() > 20: segm.append(float(np.median(f0[m, 1])))
        R["giong"]["f0_theo_doan_20s"] = segm
    # nhịp nói
    if a.transcript and os.path.exists(a.transcript):
        txt = open(a.transcript, encoding="utf-8").read()
        clean = re.sub(r"\[[^\]]*\]", " ", txt)
        words = len(clean.split())
        sentences = len(re.findall(r"[.?!]", clean))
        R["nhip_noi"] = dict(so_tu=words, so_cau=sentences, tu_moi_phut_tren_tg_giong=words / speech_time * 60,
                             tu_moi_phut_tren_tg_video=words / dur * 60, tu_moi_cau_tb=words / max(1, sentences),
                             so_cau_hoi=clean.count("?"))
        # ước lượng mốc thời gian từng dòng lời thoại: rải số từ theo thời gian có giọng
        cum_sp = np.cumsum(vad_s) * tstep  # giây có giọng tính đến khung i
        lines_ts, wdone = [], 0
        for line in txt.splitlines():
            n_w = len(re.sub(r"\[[^\]]*\]", " ", line).split())
            target = wdone / max(1, words) * cum_sp[-1]
            i = int(np.searchsorted(cum_sp, target))
            lines_ts.append((i * tstep, line.strip()))
            wdone += n_w
        with open(os.path.join(a.out, "loi-thoai-moc.csv"), "w", newline="", encoding="utf-8") as fh:
            w = csv.writer(fh); w.writerow(["moc_uoc_luong", "giay", "dong"])
            for t, l in lines_ts:
                if l: w.writerow([fmt(t), f"{t:.1f}", l])
    R["ngung"] = dict(so_cho_ngung_0_2s=len(pauses), trung_vi_s=float(np.median(pd_)), p90_s=float(np.percentile(pd_, 90)),
                      so_ngung_tren_0_5s=int((pd_ >= 0.5).sum()), so_ngung_tren_1s=int((pd_ >= 1).sum()),
                      ngung_dai_nhat_s=float(pd_.max()))

    # ---- biểu đồ
    print("[6] vẽ biểu đồ ...")
    import matplotlib; matplotlib.use("Agg")
    import matplotlib.pyplot as plt
    fig, ax = plt.subplots(2, 1, figsize=(16, 7), sharex=True)
    Mp = np.where(np.isfinite(M), M, -70); Sp = np.where(np.isfinite(S), S, -70)
    ax[0].plot(T, Mp, lw=0.4, color="#9db4d0", label="Momentary (400 ms)")
    ax[0].plot(T, Sp, lw=1.3, color="#1f4e8c", label="Short-term (3 s)")
    if loud["I"] is not None: ax[0].axhline(loud["I"], color="#c0392b", ls="--", lw=1, label=f"Tích hợp {loud['I']} LUFS")
    for c in cut_times: ax[0].axvline(c, color="#999", lw=0.3, alpha=0.6)
    ax[0].set_ylim(-60, max(-5, np.nanmax(Mp) + 2)); ax[0].set_ylabel("LUFS"); ax[0].legend(loc="lower right", fontsize=8)
    ax[0].set_title("Độ to theo thời gian (vạch xám = cắt cảnh)")
    sm = lambda y, n=20: np.convolve(y, np.ones(n) / n, "same")
    ax[1].plot(tt, sm(np.where(vad_s, b_all, np.nan) if False else b_all), lw=0.4, color="#bbb", label="toàn dải (mid)")
    g = np.where(vad_s, np.nan, b_all)
    ax[1].plot(tt, g, ".", ms=1, color="#e67e22", label="trong khoảng ngừng giọng (≈ nền/nhạc)")
    ax[1].plot(tt, sm(s_all, 40), lw=1, color="#16a085", label="kênh bên L−R (nhạc stereo)")
    for t in trans: ax[1].axvline(t["t"], color="#8e44ad", lw=0.6, alpha=0.7)
    ax[1].set_ylabel("dB (tương đối)"); ax[1].set_xlabel("giây"); ax[1].legend(loc="lower right", fontsize=8)
    ax[1].set_title("Nền khi giọng ngừng, kênh bên, tiếng động (vạch tím)")
    fig.tight_layout(); fig.savefig(A("do-to.png"), dpi=110); plt.close(fig)

    fig, ax = plt.subplots(figsize=(16, 4))
    for y, lb, c in ((b_low, "<200 Hz", "#8e44ad"), (b_voice, "300–3400 Hz (giọng)", "#2c3e50"), (b_high, ">5 kHz", "#e67e22")):
        ax.plot(tt, sm(y, 40), lw=0.8, label=lb, color=c)
    ax.set_xlabel("giây"); ax.set_ylabel("dB (tương đối)"); ax.legend(fontsize=8); ax.set_title("Năng lượng theo dải tần (trung bình trượt 0,9 s)")
    fig.tight_layout(); fig.savefig(A("dai-tan.png"), dpi=110); plt.close(fig)

    fig, ax = plt.subplots(figsize=(16, 3.2))
    ax.bar([s["start"] for s in scenes], L, width=[max(0.3, l) for l in L], align="edge", color="#2e86c1", edgecolor="white", lw=0.3)
    ax.set_xlabel("giây"); ax.set_ylabel("độ dài cảnh (s)"); ax.set_title("Nhịp cắt: mỗi cột là một cảnh")
    fig.tight_layout(); fig.savefig(A("nhip-canh.png"), dpi=110); plt.close(fig)

    run([FF, "-v", "error", "-y", "-i", a.video, "-vn", "-lavfi", "showspectrumpic=s=1600x500:mode=combined:scale=log:fscale=lin:legend=1", A("pho-toan-bo.png")])
    run([FF, "-v", "error", "-y", "-t", "30", "-i", a.video, "-vn", "-lavfi", "showspectrumpic=s=1600x500:mode=separate:scale=log:legend=1", A("pho-30s.png")])
    # phổ giữa/bên 30 s đầu, có vạch cắt cảnh
    fig, ax = plt.subplots(2, 1, figsize=(16, 6), sharex=True)
    nfr = int(30 / tstep)
    for k_, (MM, lab) in enumerate(((Mm, "kênh giữa L+R: giọng + nhạc + tiếng động"), (Ms, "kênh bên L−R: gần như chỉ còn nhạc/âm stereo"))):
        Z = 20 * np.log10(MM[:nfr].T + 1e-6)
        ax[k_].imshow(Z, origin="lower", aspect="auto", extent=[0, nfr * tstep, 0, sr / 2], vmin=Z.max() - 80, vmax=Z.max(), cmap="magma")
        ax[k_].set_ylabel("Hz"); ax[k_].set_title(lab)
        for c in cut_times[cut_times < 30]: ax[k_].axvline(c, color="cyan", lw=0.8, ls="--")
        for t in trans:
            if t["t"] < 30: ax[k_].axvline(t["t"], color="lime", lw=0.8)
    ax[1].set_xlabel("giây (xanh lơ đứt = cắt cảnh, xanh lá = tiếng động)")
    fig.tight_layout(); fig.savefig(A("pho-giua-ben-30s.png"), dpi=100); plt.close(fig)
    # khung hình tại từng tiếng động (để xem âm gắn với gì)
    if trans:
        ti = [min(dur - 0.05, t["t"] + 0.3) for t in trans[:40]]
        ims = grab_frames(a.video, ti, 320, 180)
        contact_sheet(ims, [f"{fmt(t['t'])} {t['loai'][:14]}" for t in trans[:40]], A("tieng-dong.png"), cols=5, title="Khung hình lúc có tiếng động")

    # ---- ghi tệp
    with open(os.path.join(a.out, "canh.csv"), "w", newline="", encoding="utf-8") as fh:
        w = csv.writer(fh); w.writerow(["canh", "bat_dau", "ket_thuc", "do_dai_s", "chuyen_vao", "chuyen_dong_tb", "troi_dau_cuoi", "anh"])
        for s in scenes: w.writerow([s["idx"], fmt(s["start"]), fmt(s["end"]), f"{s['dur']:.2f}", s["transition_in"], f"{s['motion']:.2f}", f"{s['drift']:.1f}", s["anh"]])
    with open(os.path.join(a.out, "lang.csv"), "w", newline="", encoding="utf-8") as fh:
        w = csv.writer(fh); w.writerow(["bat_dau", "ket_thuc", "do_dai_s"])
        for s in sil: w.writerow([fmt(s["start"]), fmt(s["end"]), f"{s['dur']:.2f}"])
    with open(os.path.join(a.out, "ngung.csv"), "w", newline="", encoding="utf-8") as fh:
        w = csv.writer(fh); w.writerow(["bat_dau", "ket_thuc", "do_dai_s"])
        for s, e in pauses: w.writerow([fmt(s), fmt(e), f"{e - s:.2f}"])
    with open(os.path.join(a.out, "tieng-dong.csv"), "w", newline="", encoding="utf-8") as fh:
        w = csv.writer(fh); w.writerow(["thoi_diem", "giay", "loai", "dai_s", "do_manh", "cach_cat_canh_s", "trung_cat", "dang_co_giong"])
        for t in trans: w.writerow([fmt(t["t"]), f"{t['t']:.2f}", t["loai"], f"{t['dai_s']:.2f}", f"{t['z']:.1f}", f"{t['gan_cat_canh_s']:.2f}", t["trung_cat"], t["dang_co_giong"]])
    R["canh_chi_tiet"] = scenes
    R["anh"] = sorted(os.listdir(os.path.join(a.out, "anh")))
    with open(os.path.join(a.out, "tong-hop.json"), "w", encoding="utf-8") as fh:
        json.dump(R, fh, ensure_ascii=False, indent=1)
    s = {k: v for k, v in R.items() if k not in ("canh_chi_tiet",)}
    s["canh"] = {k: v for k, v in R["canh"].items() if k != "cat_moi_phut_theo_doan"}
    print(json.dumps(s, ensure_ascii=False, indent=1)[:6000])
    print("Xong:", a.out)


if __name__ == "__main__":
    main()
