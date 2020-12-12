import {ConstitutionDetail as ExtractedConstitutionDetail} from "../../extractors/constitutions/constitutionDetail.model.ts";
import {ConstitutionDetail} from './constitutionDetail.model.ts';

export function transform(extractConstitutions: ExtractedConstitutionDetail[]): ConstitutionDetail[] {
    const constitution: ConstitutionDetail[] = [];

    extractConstitutions.map((c: ExtractedConstitutionDetail) => {
        const data: ConstitutionDetail = _constructor(c);
        const index = _getExistingIndex(constitution, c.name, c.topic);

        if (index === -1) {
            constitution.push(data);
        } else {
            constitution[index].chapters = constitution[index].chapters.concat(data.chapters);
            constitution[index].sections = constitution[index].sections.concat(data.sections);
        }
    });

    return constitution;
}

function _getExistingIndex(constitutions: ConstitutionDetail[], name: string, topic: string) {
    return constitutions.findIndex((c: ConstitutionDetail) => {
        return c.topic === topic && c.name === name;
    });
}

function _constructor(constitution: ExtractedConstitutionDetail) {
    const parts = [{
        id: constitution.part_number,
        name: constitution.part,
        from_section_id: "",
        to_section_id: "",
    }];

    const chapters = [{
        id: constitution.chapter_number,
        name: constitution.chapter,
        from_section_id: "",
        to_section_id: "",
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
        name: constitution.name,
        topic: constitution.topic,
        prelude: "",
        chapters: chapters,
        sections: sections,
    }
}


