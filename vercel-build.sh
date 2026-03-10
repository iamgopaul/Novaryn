#!/usr/bin/env bash
set -euo pipefail

FRONTEND_DIR=""
for d in "." "Novaryn Hub" "../Novaryn Hub" "../../Novaryn Hub"; do
  if [[ -f "$d/vite.config.ts" && -f "$d/package.json" ]]; then
    FRONTEND_DIR="$d"
    break
  fi
done

if [[ -z "$FRONTEND_DIR" ]]; then
  echo "Unable to locate frontend directory"
  pwd
  find . -maxdepth 3 -type d
  exit 1
fi

ROOT_DIR="$(pwd)"
cd "$FRONTEND_DIR"
bun run build

cd "$ROOT_DIR"
if [[ "$FRONTEND_DIR" != "." ]]; then
  rm -rf dist
  cp -R "$FRONTEND_DIR/dist" dist
fi
