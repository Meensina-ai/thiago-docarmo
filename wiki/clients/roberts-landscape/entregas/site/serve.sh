#!/usr/bin/env bash
# Polaris Masonry & Hardscape — local preview
# Roda o site no seu navegador. Uso: bash serve.sh  (ou ./serve.sh)
set -e
cd "$(dirname "$0")"
PORT="${1:-8000}"
echo "Polaris site rodando em  ->  http://localhost:${PORT}/"
echo "(Ctrl+C pra parar)"
# abre o navegador automaticamente (Mac / Linux)
( sleep 1; command -v open >/dev/null && open "http://localhost:${PORT}/" || \
  command -v xdg-open >/dev/null && xdg-open "http://localhost:${PORT}/" ) >/dev/null 2>&1 &
python3 -m http.server "${PORT}"
