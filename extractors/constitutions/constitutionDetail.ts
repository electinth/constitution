import {parseCsv} from '../csv.ts';
import {ConstitutionDetail} from './constitutionDetail.model.ts';

export async function extractConstitution(csvConsPath: string, csvNamePath: string): Promise<ConstitutionDetail[]> {
    const rawConstitutions = await parseCsv(csvConsPath, mapConstitution);
    const names = await parseCsv(csvNamePath, mapName);

    return rawConstitutions.map((con) => {
        return {
            id: con.id,
            chapter_number: con.chapter_number,
            chapter: con.chapter,
            part_number: con.part_number,
            part: con.part,
            section: con.section,
            content: con.content,
            name: names[nameIndex(names, con.id)]?.name,
        }
    });
}

function nameIndex(consName: Name[], conId: number) {
    return consName.findIndex((c: Name) => {
        return c.id === conId;
    });
}

function mapName(cells: string[]): Name {
    return {
        id: parseInt(cells[0]),
        name: cells[1]
    }
}

function mapConstitution(cells: string[]): ConstitutionDetail {
    return {
        id: parseInt(cells[0]),
        chapter_number: parseInt(cells[1]),
        chapter: cells[2],
        part_number: parseInt(cells[3]),
        part: cells[4],
        section: cells[5],
        content: cells[6],
    } as ConstitutionDetail;
}

export interface Name {
    id: number;
    name: string;
}
