import { parseCsv } from './csv.ts';
import { ConstitutionRow } from "./constitution-row.model.ts";

export async function extractFromCsv(csvPath: string): Promise<ConstitutionRow[]> {
  return parseCsv(csvPath, mapConstitution);
}

function mapConstitution(cells: string[]): ConstitutionRow {
  return {
    id: cells[0],
    name: cells[1],
    shortName: cells[2],
    year: parseInt(cells[3]),
    isInterim: cells[4] === 'TRUE',
    isInvolvedWithCoup: cells[5] === 'TRUE',
    context: cells[6],
  } as ConstitutionRow;
}
