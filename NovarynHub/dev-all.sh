#!/usr/bin/env bash
set -euo pipefail

trap 'kill 0' EXIT INT TERM

if lsof -tiTCP:3000 -sTCP:LISTEN >/dev/null 2>&1; then
  echo "Backend already running on port 3000. Reusing existing process."
else
  (
    cd "/Users/iamgopaul/Projects/Novaryn/NovarynHub"
    bun run dev:api
  ) &
fi

(
  cd "/Users/iamgopaul/Projects/Novaryn/NovarynHub"
  bun run dev
) &

wait
