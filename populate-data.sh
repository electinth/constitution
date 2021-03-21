docker run \
  --rm \
  -v $PWD/data-fetcher:/app \
  -v $PWD/data:/app/data \
  hayd/alpine-deno:1.8.1 \
   deno run --allow-net --allow-write=/app/data --allow-read=/app/data \
    --import-map /app/import_map.json \
    --unstable \
    /app/app.ts \
    -o /app/data