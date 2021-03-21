import { parseCsv } from "../csv.ts";
import { RecordRow } from "./record-row.model.ts";

export async function extractFromCsv(csvPath: string): Promise<RecordRow[]> {
  return parseCsv(csvPath, mapRecordRow);
}

function mapRecordRow(cells: string[]): RecordRow {
  return {
    constitutionId: cells[0],
    fromPage: parseFloat(cells[1]),
    toPage: parseFloat(cells[2]),
    categoryId: cells[3],
    note: cells[4],
  } as RecordRow;
}