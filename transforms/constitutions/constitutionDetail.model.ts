export interface ConstitutionDetail {
    topic: string;
    name: string;
    prelude: string;
    chapters: Chapters[];
    sections: Sections[];
}

export interface Chapters {
    id: string;
    name: string;
    from_section_id: string;
    to_section_id: string;
    parts: Parts[];
}

export interface Parts {
    id: string;
    name: string;
    from_section_id: string;
    to_section_id: string;
}

export interface Sections {
    id: string;
    content: string;
    chapter_id: string;
    chapter_name: string;
    part_id: string;
    part_name: string;
}
