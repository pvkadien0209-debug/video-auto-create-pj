# ds-bai-du-giong.py — #154 Lập danh sách video ĐỦ GIỌNG KOKORO để render hàng loạt (4-render-tat-ca.bat gọi).
# Bài "đủ giọng" = có kịch bản data/scripts/<bài>--w01.js và mọi câu tiếng Anh của bài trong loi_doc.json đã có mp3
# trong public/audio/kokoro/<bài>/. Ghi danh sách mã video (<bài>--w01) vào renders/dp/_ds-render.txt.
# Chạy tay: python tools\kokoro\ds-bai-du-giong.py
import argparse, glob, json, os, sys

HERE = os.path.dirname(os.path.abspath(__file__))
VID = os.path.abspath(os.path.join(HERE, "..", ".."))
ap = argparse.ArgumentParser()
ap.add_argument("--loi-doc", default=r"C:\Dienpham\App\SEO-PT-projectjs\server\router\DetPro\loi_doc.json")
ap.add_argument("--out", default=os.path.join(VID, "renders", "dp", "_ds-render.txt"))
a = ap.parse_args()

scripts = {os.path.basename(f)[: -len("--w01.js")] for f in glob.glob(os.path.join(VID, "src", "rootComponents", "CSK004", "data", "scripts", "*--w01.js"))}
loi = json.load(open(a.loi_doc, encoding="utf-8"))
need = {}
for x in loi:
    if x.get("lang", "en") != "en": continue
    slug, name = x["code"].split("/", 1)
    need.setdefault(slug, []).append(name)

kdir = os.path.join(VID, "public", "audio", "kokoro")
ready, thieu, chua = [], [], []
for slug in sorted(scripts):
    names = need.get(slug)
    if not names: continue
    have = sum(os.path.exists(os.path.join(kdir, slug, n + ".mp3")) for n in names)
    if have == len(names): ready.append(slug)
    elif have: thieu.append(f"{slug} ({have}/{len(names)})")
    else: chua.append(slug)

os.makedirs(os.path.dirname(a.out), exist_ok=True)
open(a.out, "w", encoding="utf-8").write("\n".join(s + "--w01" for s in ready) + "\n")
print(f"Đủ giọng Kokoro: {len(ready)} bài → {a.out}")
if thieu: print(f"Giọng dở dang ({len(thieu)}): " + ", ".join(thieu[:10]) + (" …" if len(thieu) > 10 else ""))
print(f"Chưa có giọng: {len(chua)} bài (chạy 3-tao-giong-kokoro.bat all để tạo)")
sys.exit(0 if ready else 2)
