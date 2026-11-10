#!/usr/bin/env bash
# Regenerates public/og-image.png (social preview) and public/apple-touch-icon.png with headless Chrome.
# Run after changing your photo (src/assets/profile.jpg) or title:  bash scripts/og/render.sh
set -euo pipefail
cd "$(dirname "$0")/../.."
CHROME="${CHROME:-/Applications/Google Chrome.app/Contents/MacOS/Google Chrome}"
"$CHROME" --headless=new --disable-gpu --hide-scrollbars --force-device-scale-factor=1 --allow-file-access-from-files \
  --window-size=1200,630 --screenshot="$PWD/public/og-image.png" "file://$PWD/scripts/og/og.html"
"$CHROME" --headless=new --disable-gpu --hide-scrollbars --force-device-scale-factor=1 --allow-file-access-from-files \
  --window-size=180,180 --screenshot="$PWD/public/apple-touch-icon.png" "file://$PWD/scripts/og/icon.html"
echo "Done: public/og-image.png, public/apple-touch-icon.png"
