#!/bin/sh
set -e

export PORT="${PORT:-8000}"
exec node server.js
