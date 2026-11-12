# drewtyl.com

Next.js site: About + Journal (/), Work (/work), Creative (/creative).

## Updating content
1. Edit in the **drewtyl.com Editor** (private page on claude.ai), click "Ready to publish".
2. Claude pulls the saved content + uploaded files and runs:
   `python3 scripts/publish.py editor.json <asset_id>=<file> ...`
   which writes `data/content.json` and copies media into `public/photos/`.
3. Commit + push → Vercel deploys automatically.

Fixed details (email, socials, CV path) live in `content.ts`.
