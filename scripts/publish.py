#!/usr/bin/env python3
"""Apply content exported from the drewtyl.com Editor to the site.

Usage:
  python3 scripts/publish.py <editor.json> [<asset_id>=<downloaded_file> ...]

- Copies each uploaded asset into public/photos/<asset_id>.<ext>
- Rewrites media entries to point at those local files
- Writes data/content.json, which the site reads at build time
"""
import json, mimetypes, shutil, sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
PHOTOS = ROOT / "public" / "photos"
EXT = {"image/jpeg": ".jpg", "image/png": ".png", "image/webp": ".webp", "image/gif": ".gif",
       "video/mp4": ".mp4", "video/quicktime": ".mov", "video/webm": ".webm"}


def main():
    src = json.loads(Path(sys.argv[1]).read_text())
    files = dict(a.split("=", 1) for a in sys.argv[2:])
    PHOTOS.mkdir(parents=True, exist_ok=True)
    missing = []

    def fix(m):
        if not m:
            return None
        if m.get("src", "").startswith("/photos/"):
            return m
        aid = m.get("id")
        if not aid or aid not in files:
            missing.append(aid or m.get("url"))
            return None
        f = Path(files[aid])
        ctype = mimetypes.guess_type(m.get("name", ""))[0] or ""
        ext = EXT.get(ctype) or f.suffix or (".mp4" if m.get("video") else ".jpg")
        dest = PHOTOS / f"{aid}{ext}"
        shutil.copyfile(f, dest)
        return {"src": f"/photos/{dest.name}", "label": m.get("label", ""), "video": bool(m.get("video")), "id": aid}

    out = {k: src.get(k) for k in ("about", "journal", "work", "creative")}
    out["about"]["portrait"] = fix(out["about"].get("portrait"))
    g = out["work"]["gorilla"]
    g["images"] = [x for x in map(fix, g.get("images", [])) if x]
    c = out["creative"]
    c["media"] = [x for x in map(fix, c.get("media", [])) if x]

    (ROOT / "data" / "content.json").write_text(json.dumps(out, ensure_ascii=False, indent=1))
    print("wrote data/content.json")
    if missing:
        print("MISSING ASSETS (skipped):", ", ".join(map(str, missing)))


if __name__ == "__main__":
    main()
