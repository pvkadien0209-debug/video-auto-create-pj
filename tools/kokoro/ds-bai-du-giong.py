# ds-bai-du-giong.py — #154 Lập danh sách video ĐỦ GIỌNG KOKORO để render hàng loạt (4-render-tat-ca.bat gọi).
# Bài "đủ giọng" = có kịch bản data/scripts/<bài>--w01.js và mọi câu tiếng Anh của bài trong loi_doc.json đã có mp3
# trong public/audio/kokoro/<bài>/. Ghi danh sách mã video (<bài>--w01) vào renders/dp/_ds-render.txt.
# #158: kiểm luôn public/audio/kokoro/durations.dat — hỏng (vd. commit đúng lúc Kokoro đang ghi) hoặc thiếu câu
#       → tự đo lại độ dài từ chính các tệp mp3 và ghi lại, để Remotion bật giọng (thiếu durations = video câm).
# Chạy tay: python tools\kokoro\ds-bai-du-giong.py
import argparse, glob, json, os, sys

HERE = os.path.dirname(os.path.abspath(__file__))
VID = os.path.abspath(os.path.join(HERE, "..", ".."))
ap = argparse.ArgumentParser()
ap.add_argument("--loi-doc", default=r"C:\Dienpham\App\SEO-PT-projectjs\server\router\DetPro\loi_doc.json")
ap.add_argument("--out", default=os.path.join(VID, "renders", "dp", "_ds-render.txt"))
a = ap.parse_args()

SCR = os.path.join(VID, "src", "rootComponents", "CSK004", "data", "scripts")
scripts = {os.path.basename(f)[: -len("--w01.js")] for f in glob.glob(os.path.join(SCR, "*--w01.js"))}
need = {}
if os.path.exists(a.loi_doc):
    for x in json.load(open(a.loi_doc, encoding="utf-8")):
        if x.get("lang", "en") != "en": continue
        slug, name = x["code"].split("/", 1)
        need.setdefault(slug, []).append(name)
else:
    # #157: máy chưa có dự án SEO-PT-projectjs (máy mới) → đọc thẳng câu tiếng Anh trong kịch bản
    print("(Không thấy loi_doc.json — đọc câu trực tiếp từ kịch bản)")
    def walk(o, scene, out):
        if isinstance(o, dict):
            if scene and "id" in o and "say" in o and o.get("lang", "en") == "en": out.append(f"{scene}-{o['id']}")
            for v in o.values(): walk(v, scene, out)
        elif isinstance(o, list):
            for v in o: walk(v, scene, out)
    for slug in scripts:
        src = open(os.path.join(SCR, slug + "--w01.js"), encoding="utf-8").read()
        if "export default" not in src: continue
        try: sc = json.loads(src.split("export default", 1)[1].strip().rstrip(";").strip())
        except Exception: continue
        out = []
        for s in sc.get("scenes", []): walk(s.get("lines", []), s.get("id"), out)
        if out: need[slug] = out

kdir = os.path.join(VID, "public", "audio", "kokoro")
ready, thieu, chua = [], [], []
for slug in sorted(scripts):
    names = need.get(slug)
    if not names: continue
    have = sum(os.path.exists(os.path.join(kdir, slug, n + ".mp3")) for n in names)
    if have == len(names): ready.append(slug)
    elif have: thieu.append(f"{slug} ({have}/{len(names)})")
    else: chua.append(slug)

# ---------- #158: sửa durations.dat cho các bài đủ giọng ----------
def mp3_ms(p):
    """Độ dài mp3 (ms): đọc khung Xing/Info (mp3 do Kokoro + ffmpeg tạo), không có thì tính theo bitrate."""
    b = open(p, "rb").read()
    i = 0
    if b[:3] == b"ID3":
        i = 10 + (((b[6] & 0x7F) << 21) | ((b[7] & 0x7F) << 14) | ((b[8] & 0x7F) << 7) | (b[9] & 0x7F))
    while i < len(b) - 4 and not (b[i] == 0xFF and (b[i + 1] & 0xE0) == 0xE0):
        i += 1
    if i >= len(b) - 4:
        return None
    h = b[i:i + 4]
    ver, br_idx, sr_idx, ch = (h[1] >> 3) & 3, h[2] >> 4, (h[2] >> 2) & 3, (h[3] >> 6) & 3
    mpeg1 = ver == 3
    sr = {3: [44100, 48000, 32000], 2: [22050, 24000, 16000], 0: [11025, 12000, 8000]}.get(ver, [44100] * 3)[min(sr_idx, 2)]
    spf = 1152 if mpeg1 else 576
    off = i + 4 + ((32 if ch != 3 else 17) if mpeg1 else (17 if ch != 3 else 9))
    if b[off:off + 4] in (b"Xing", b"Info") and int.from_bytes(b[off + 4:off + 8], "big") & 1:
        return round(int.from_bytes(b[off + 8:off + 12], "big") * spf / sr * 1000)
    br = [0, 32, 40, 48, 56, 64, 80, 96, 112, 128, 160, 192, 224, 256, 320][br_idx] * 1000
    return round((len(b) - i) * 8 / br * 1000) if br else None

dat = os.path.join(kdir, "durations.dat")
try:
    durs = json.load(open(dat, encoding="utf-8")); broken = False
except Exception:
    durs, broken = {}, os.path.exists(dat)
added = 0
for slug in ready:
    for n in need[slug]:
        code = f"{slug}/{n}"
        if code not in durs:
            ms = mp3_ms(os.path.join(kdir, slug, n + ".mp3"))
            if ms: durs[code] = ms; added += 1
if broken or added:
    json.dump(durs, open(dat + ".tmp", "w", encoding="utf-8"), ensure_ascii=False)
    os.replace(dat + ".tmp", dat)
    print(f"Đã sửa durations.dat Kokoro{' (tệp cũ bị hỏng)' if broken else ''}: đo lại {added} câu từ mp3")

os.makedirs(os.path.dirname(a.out), exist_ok=True)
open(a.out, "w", encoding="utf-8").write("\n".join(s + "--w01" for s in ready) + "\n")
print(f"Đủ giọng Kokoro: {len(ready)} bài → {a.out}")
if thieu: print(f"Giọng dở dang ({len(thieu)}): " + ", ".join(thieu[:10]) + (" …" if len(thieu) > 10 else ""))
print(f"Chưa có giọng: {len(chua)} bài (chạy 3-tao-giong-kokoro.bat all để tạo)")
sys.exit(0 if ready else 2)
