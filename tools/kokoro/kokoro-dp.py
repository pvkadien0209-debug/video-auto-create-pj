# kokoro-dp.py — #137 Tạo giọng đọc video DetPro bằng Kokoro-82M (miễn phí, Apache-2.0) NGAY TRÊN MÁY ANH.
# Đọc loi_doc.json → ghi mp3 vào KHO RIÊNG VID\public\audio\kokoro\<bài>\<cảnh>-<câu>.mp3 + kokoro\durations.dat (#138)
# → Remotion đọc được luôn và ƯU TIÊN Kokoro; kho Google (public\audio\dp) không bị đụng tới.
#
# Chạy (trong thư mục my-sta-video):
#   python tools\kokoro\kokoro-dp.py --slug a-day-within-a-day          một bài
#   python tools\kokoro\kokoro-dp.py --slug bai-1 --slug bai-2          nhiều bài
#   python tools\kokoro\kokoro-dp.py --all-scripts                      mọi bài đã có kịch bản video
#   thêm --force để đọc lại cả câu đã có; --dry để xem sẽ đọc bao nhiêu câu
# Lần đầu: tự tải mô hình (~330 MB) vào tools\kokoro\model\.
import argparse, glob, hashlib, json, os, re, subprocess, sys, time, urllib.request

HERE = os.path.dirname(os.path.abspath(__file__))
VID = os.path.abspath(os.path.join(HERE, "..", ".."))
ap = argparse.ArgumentParser()
ap.add_argument("--slug", action="append", default=[])
ap.add_argument("--all-scripts", action="store_true", help="mọi bài có kịch bản trong data/scripts")
ap.add_argument("--loi-doc", default=r"C:\Dienpham\App\SEO-PT-projectjs\server\router\DetPro\loi_doc.json")
ap.add_argument("--out", default=os.path.join(VID, "public", "audio", "kokoro"))
ap.add_argument("--scripts", default=os.path.join(VID, "src", "rootComponents", "CSK004", "data", "scripts"))
ap.add_argument("--force", action="store_true")
ap.add_argument("--dry", action="store_true")
ap.add_argument("--speed", type=float, default=1.0)
a = ap.parse_args()

CFG = json.load(open(os.path.join(HERE, "kokoro-cau-hinh.json"), encoding="utf-8"))
VOICE, DEFAULT_VOICE, FIX = CFG["giong"], CFG["giong_mac_dinh"], CFG["sua_cach_doc"]

# ---------- kịch bản video: ai nói câu nào (để chọn giọng) ----------
def load_script(path):
    src = open(path, encoding="utf-8").read()
    if "export default" not in src: return None
    body = src.split("export default", 1)[1].strip().rstrip(";").strip()
    try: return json.loads(body)
    except Exception: return None

def who_map(script, slug):
    m = {}
    def walk(o, scene):
        if isinstance(o, dict):
            if "id" in o and "say" in o and scene: m[f"{slug}/{scene}-{o['id']}"] = o.get("who") or "det"
            for v in o.values(): walk(v, scene)
        elif isinstance(o, list):
            for v in o: walk(v, scene)
    for s in script.get("scenes", []): walk(s, s.get("id"))
    return m

scripts = {}
for f in glob.glob(os.path.join(a.scripts, "*--w01.js")):
    slug = os.path.basename(f)[: -len("--w01.js")]
    sc = load_script(f)
    if sc: scripts[slug] = who_map(sc, slug)
slugs = set(a.slug) | (set(scripts) if a.all_scripts else set())
if not slugs: sys.exit("Chưa chọn bài: dùng --slug <bài> hoặc --all-scripts")

# ---------- lời cần đọc ----------
loi = json.load(open(a.loi_doc, encoding="utf-8"))
todo = [x for x in loi if x["code"].split("/")[0] in slugs]
skip_vi = [x for x in todo if x.get("lang", "en") != "en"]
todo = [x for x in todo if x.get("lang", "en") == "en"]
mf_path = os.path.join(a.out, "kokoro-manifest.dat")   # câu đã đọc: mã → băm lời+giọng
mf = json.load(open(mf_path, encoding="utf-8")) if os.path.exists(mf_path) else {}
def key(x, v): return hashlib.md5(f"{x['text']}|{v}|{a.speed}".encode()).hexdigest()[:12]
def voice_of(code):
    slug = code.split("/")[0]
    return VOICE.get(scripts.get(slug, {}).get(code, "det"), DEFAULT_VOICE)
need = [x for x in todo if a.force or mf.get(x["code"]) != key(x, voice_of(x["code"]))
        or not os.path.exists(os.path.join(a.out, *x["code"].split("/")) + ".mp3")]
print(f"Bài: {', '.join(sorted(slugs))}\nCâu tiếng Anh: {len(todo)} · cần đọc: {len(need)} · bỏ qua câu tiếng Việt: {len(skip_vi)}")
missing = slugs - {x["code"].split("/")[0] for x in loi}
if missing: print("⚠ Không thấy trong loi_doc.json:", ", ".join(sorted(missing)))
if a.dry or not need: sys.exit(0)

# ---------- mô hình ----------
MD = os.path.join(HERE, "model"); os.makedirs(MD, exist_ok=True)
BASE = "https://github.com/thewh1teagle/kokoro-onnx/releases/download/model-files-v1.0/"
for fn in ["kokoro-v1.0.onnx", "voices-v1.0.bin"]:
    p = os.path.join(MD, fn)
    if not os.path.exists(p):
        print("Tải", fn, "(lần đầu)…"); urllib.request.urlretrieve(BASE + fn, p + ".part"); os.replace(p + ".part", p)

import numpy as np, soundfile as sf
from kokoro_onnx import Kokoro
try:
    import imageio_ffmpeg; FFMPEG = imageio_ffmpeg.get_ffmpeg_exe()
except Exception:
    FFMPEG = "ffmpeg"
k = Kokoro(os.path.join(MD, "kokoro-v1.0.onnx"), os.path.join(MD, "voices-v1.0.bin"))

def unaccent(t):
    import unicodedata
    t = t.replace("đ", "d").replace("Đ", "D")
    return unicodedata.normalize("NFC", "".join(ch for ch in unicodedata.normalize("NFD", t) if unicodedata.category(ch) != "Mn"))

def trim(x, sr, thr=0.01, pad=0.04):
    idx = np.where(np.abs(x) > thr)[0]
    if not len(idx): return x
    p = int(pad * sr); return x[max(0, idx[0] - p): idx[-1] + p]

dat_path = os.path.join(a.out, "durations.dat")
durs = json.load(open(dat_path, encoding="utf-8")) if os.path.exists(dat_path) else {}
def save():
    for path, obj in [(dat_path, durs), (mf_path, mf)]:
        json.dump(obj, open(path + ".tmp", "w", encoding="utf-8"), ensure_ascii=False); os.replace(path + ".tmp", path)

t0 = time.time()
for i, x in enumerate(need, 1):
    code = x["code"]; slug, name = code.split("/", 1)
    t = x["text"]
    for src, dst in FIX.items(): t = re.sub(re.escape(src), dst, t)
    t = unaccent(t)  # #147: tên Việt chưa có trong sua_cach_doc → bỏ dấu (Ngọc → Ngoc) để Kokoro không đọc lạc
    v = voice_of(code)
    audio, sr = k.create(t, voice=v, speed=a.speed * (0.85 if x.get("slow") else 1.0), lang="en-us")
    audio = trim(audio, sr)
    d = os.path.join(a.out, slug); os.makedirs(d, exist_ok=True)
    wav, mp3 = os.path.join(d, name + ".wav"), os.path.join(d, name + ".mp3")
    sf.write(wav, audio, sr)
    subprocess.run([FFMPEG, "-loglevel", "error", "-y", "-i", wav, "-af", "loudnorm=I=-16:TP=-1.5", "-ar", "44100", "-b:a", "128k", mp3], check=True)
    os.remove(wav)
    durs[code] = round(len(audio) / sr * 1000); mf[code] = key(x, v)
    if i % 20 == 0 or i == len(need):
        save(); el = time.time() - t0
        print(f"  {i}/{len(need)} · {el/60:.1f} phút · còn ~{el/i*(len(need)-i)/60:.0f} phút", flush=True)
save()
print("Xong. Render: npx tsx render-CSK004.js --only=<bài>--w01")
