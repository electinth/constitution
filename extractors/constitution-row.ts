import { parseCsv } from './csv.ts';
import { ConstitutionRow } from "./constitution-row.model.ts";

export async function extractFromCsv(csvPath: string): Promise<ConstitutionRow[]> {
  return parseCsv(csvPath, mapConstitution);
}

function mapConstitution(cells: string[]): ConstitutionRow {
  return {
    id: cells[0],
    name: cells[1],
    year: parseInt(cells[2]),
    isTemporary: cells[3] === 'TRUE' ? true : false,
    isWrittenbyCoup: cells[4] === 'TRUE' ? true : false,
    context: cells[5],
  } as ConstitutionRow;
}