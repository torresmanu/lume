#!/usr/bin/env bash
set -euo pipefail

# GitHub Pages cannot run POST /api/waitlist. Publish a pointer to the
# canonical host so old shares do not collect dead emails.
canonical="${CANONICAL_SITE_URL:-https://lumefuego.com}"
canonical="${canonical%/}"

python3 - "$canonical" <<'PY'
from pathlib import Path
import html
import json
import sys

canonical = sys.argv[1]
href = canonical + "/"
escaped = html.escape(href)
script_url = json.dumps(href)

out = Path("out")
out.mkdir(parents=True, exist_ok=True)
page = f"""<!DOCTYPE html>
<html lang="es-AR">
  <head>
    <meta charset="utf-8" />
    <meta http-equiv="refresh" content="0;url={escaped}" />
    <link rel="canonical" href="{escaped}" />
    <meta name="robots" content="noindex, nofollow" />
    <title>Lume</title>
    <script>location.replace({script_url});</script>
  </head>
  <body>
    <p><a href="{escaped}">Lume vive en {html.escape(canonical)}</a></p>
  </body>
</html>
"""
(out / "index.html").write_text(page, encoding="utf-8")
(out / "404.html").write_text(page, encoding="utf-8")
(out / "robots.txt").write_text("User-agent: *\nDisallow: /\n", encoding="utf-8")
(out / ".nojekyll").write_text("", encoding="utf-8")
PY
