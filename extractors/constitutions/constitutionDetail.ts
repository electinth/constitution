import { parseCsv } from '../csv.ts';
import { ConstitutionDetail } from './constitutionDetail.model.ts';

export async function extractConstitutionFromCsv(csvPath: string): Promise<ConstitutionDetail[]> {
    return parseCsv(csvPath, mapConstitution)
}

function mapConstitution(cells: string[]): ConstitutionDetail {
    return {
        topic: cells[0],
        name: cells[1],
        chapter_number: cells[2],
        chapter: cells[3],
        part_number: cells[4],
        part: cells[5],
        section: cells[6],
        content: cells[7],
    } as ConstitutionDetail;
}
