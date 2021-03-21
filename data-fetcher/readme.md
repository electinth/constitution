## Constitutions data
Pull constitution data from google sheets to the world 😁

### Environment
- Deno 1.8.1

### Running script
```
deno run --allow-net --allow-write=$OUTPUT_DIR --allow-read=$OUTPUT_DIR \
    --import-map /app/import_map.json \
    --unstable \
    /app/app.ts \
    -o $OUTPUT_DIR
```