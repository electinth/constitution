import {ConstitutionDetail as ExtractedConstitutionDetail} from "../../extractors/constitutions/constitutionDetail.model.ts";

export interface ConstitutionDetail {
    id: number;
    topic: string;
    name: string;
    prelude: string;
    chapters: Chapters[];
    sections: Sections[];
}

export interface Chapters {
    id: number;
    name: string;
    from_section_id: number;
    to_section_id: number;
    parts: Parts[];
}

export interface Parts {
    id: number;
    name: string;
    from_section_id: number;
    to_section_id: number;
}

export interface Sections {
    id: string;
    content: string;
    chapter_id: number;
    chapter_name: string;
    part_id: number;
    part_name: string;
}
