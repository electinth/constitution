import {ConstitutionDetail as ExtractedConstitutionDetail} from "../../extractors/constitutions/constitution-detail.model.ts";
import {ConstitutionDetail} from './constitution-detail.model.ts';

export function transform(extractConstitutions: ExtractedConstitutionDetail[]): ConstitutionDetail[] {
    const constitution: ConstitutionDetail[] = [];

    extractConstitutions.map((c: ExtractedConstitutionDetail) => {
        const data = _constructor(c);
        const index = _getExistingIndex(constitution, c.id, c.chapter);

        if (index === -1) {
            constitution.push(data);
        } else {
            constitution[index].chapters = constitution[index].chapters.concat(data.chapters);
            constitution[index].sections = constitution[index].sections.concat(data.sections);
        }
    });

    return constitution;
}

function _getExistingIndex(constitutions: ConstitutionDetail[], id: string, chapter: string) {
    return constitutions.findIndex((c: ConstitutionDetail) => {
        return c.id === id && c.topic === chapter;
    });
}

function _constructor(constitution: ExtractedConstitutionDetail): ConstitutionDetail{
    const parts = [{
        id: constitution.part_number,
        name: constitution.part,
        from_section_id: 0, // Todo get smallest amount
        to_section_id: 0, // Todo get largest amount
    }];

    const chapters = [{
        id: constitution.chapter_number,
        name: constitution.chapter,
        from_section_id: 0,
        to_section_id: 0,
        parts: parts,
    }];

    const sections = [{
        id: constitution.section,
        content: constitution.content,
        chapter_id: constitution.chapter_number,
        chapter_name: constitution.chapter,
        part_id: constitution.part_number,
        part_name: constitution.part
    }];

    return {
        id: constitution.id,
        name: constitution.name,
        topic: constitution.chapter,
        prelude: "",
        chapters: chapters,
        sections: sections,
    }
}


