import { parse } from "https://deno.land/std@0.80.0/encoding/csv.ts"

export async function parseCsv<T>(
  csvPath: string,
  mapper: ((cells: string[]) => T),
  skipFirstRow = true): Promise<T[]> {
  const raw = await (await fetch(csvPath)).text();
  const parsed = await parse(raw) as string[][];

  if (skipFirstRow) {
    parsed.splice(0, 1);
  }
  return parsed.map(mapper);
}