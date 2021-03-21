

export function loadToJson(data: unknown, outputPath: string) {
  return Deno.writeTextFile(outputPath, JSON.stringify(data, null, 2));
}