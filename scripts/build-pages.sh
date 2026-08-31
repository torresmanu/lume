#!/usr/bin/env bash
set -euo pipefail

# GitHub Pages is static: skip next-intl middleware for this build, then restore it.
middleware="src/middleware.ts"
skipped="src/middleware.skipped.ts"
api_dir="src/app/api"
api_skipped="src/app/_api.skipped"

if [[ -f "$middleware" ]]; then
  mv "$middleware" "$skipped"
fi
if [[ -d "$api_dir" ]]; then
  mv "$api_dir" "$api_skipped"
fi

restore() {
  if [[ -f "$skipped" ]]; then
    mv "$skipped" "$middleware"
  fi
  if [[ -d "$api_skipped" ]]; then
    mv "$api_skipped" "$api_dir"
  fi
}
trap restore EXIT

npm run pdf
npx next build

touch out/.nojekyll

# Root of the Pages site should land on the Argentine story.
cat > out/index.html <<EOF
<!DOCTYPE html>
<html lang="es-AR">
  <head>
    <meta charset="utf-8" />
    <meta http-equiv="refresh" content="0;url=es-AR/" />
    <link rel="canonical" href="es-AR/" />
    <title>Lume</title>
    <script>location.replace("es-AR/");</script>
  </head>
  <body>
    <p><a href="es-AR/">Lume</a></p>
  </body>
</html>
EOF

cp out/index.html out/404.html
