import { parse } from "https://deno.land/std@0.80.0/encoding/csv.ts"
import { RecordRow } from "./record-row.model.ts";

export async function extractFromCsv(csvPath: string): Promise<RecordRow[]> {
  const raw = await (await fetch(csvPath)).text();
  return parse(raw, {
    skipFirstRow: true,
    columns: ['edition', 'fromPage', 'toPage', 'categoryName', 'note'],
    parse: (e) => {
      const eachRow = e as {[key: string]: string};
      return mapRecordRow(eachRow);
    },
  }) as Promise<RecordRow[]>;
}

function mapRecordRow(dict: { [key: string]: string }): RecordRow {
  return {
    edition: dict['edition'],
    fromPage: parseFloat(dict['fromPage']),
    toPage: parseFloat(dict['toPage']),
    categoryName: dict['categoryName'],
    note: dict['note'],
  } as RecordRow;
}