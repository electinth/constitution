import { parse } from "https://deno.land/std@0.80.0/encoding/csv.ts"
import { RecordRow } from "./record-row.model.ts";

export async function extractFromCsv(csvPath: string): Promise<RecordRow[]> {
  const raw = await (await fetch(csvPath)).text();
  return parse(raw, {
    skipFirstRow: true,
    columns: ['constitutionId', 'fromPage', 'toPage', 'categoryId', 'note'],
    parse: (e) => {
      const eachRow = e as {[key: string]: string};
      return mapRecordRow(eachRow);
    },
  }) as Promise<RecordRow[]>;
}

function mapRecordRow(dict: { [key: string]: string }): RecordRow {
  return {
    constitutionId: dict['constitutionId'],
    fromPage: parseFloat(dict['fromPage']),
    toPage: parseFloat(dict['toPage']),
    categoryId: dict['categoryId'],
    note: dict['note'],
  } as RecordRow;
}