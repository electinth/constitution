import {
    assertEquals,
} from "https://deno.land/std@0.80.0/testing/asserts.ts";
import { transform } from "./constitution-detail.ts";


Deno.test('should return correct format for constitution data', () => {
    const constitutions = transform([
        {
            id: "con2517",
            name: "รัฐธรรมนูญแห่งราชอาณาจักรไทย พุทธศักราช 2517",
            chapter_number: 6,
            chapter: "รัฐสภา",
            part_number: 2,
            part: "วุฒิสภา",
            section: "107",
            content: "วุฒิสภาประกอบด้วยสมาชิกจำนวนหนึ่งร้อยคน ซึ่งพระมหากษัตริย์ทรงเลือกและแต่ง..",
        },
        {
            id: "con2540",
            name: "รัฐธรรมนูญแห่งราชอาณาจักรไทย พุทธศักราช 2540",
            chapter_number: 6,
            chapter: "รัฐสภา",
            part_number: 3,
            part: "วุฒิสภา",
            section: "121",
            content: "วุฒิสภาประกอบด้วยสมาชิกจำนวนหนึ่งร้อยคน..",
        },
        {
            id: "con2540",
            name: "รัฐธรรมนูญแห่งราชอาณาจักรไทย พุทธศักราช 2540",
            chapter_number: 6,
            chapter: "รัฐสภา",
            part_number: 3,
            part: "วุฒิสภา",
            section: "122",
            content: "การเลือกตั้งสมาชิกวุฒิสภา ให้ใช้เขตจังหวัดเป็นเขตเลื...",
        },

    ]);

    assertEquals(constitutions, [
        {
            "id": "con2517",
            "name": "รัฐธรรมนูญแห่งราชอาณาจักรไทย พุทธศักราช 2517",
            "topic": "รัฐสภา",
            "prelude": "",
            "chapters": [
                {
                    "id": 6,
                    "name": "รัฐสภา",
                    "from_section_id": 0,
                    "to_section_id": 0,
                    "parts": [
                        {
                            "id": 2,
                            "name": "วุฒิสภา",
                            "from_section_id": 0,
                            "to_section_id": 0
                        }
                    ]
                }
            ],
            "sections": [
                {
                    "id": "107",
                    "content": "วุฒิสภาประกอบด้วยสมาชิกจำนวนหนึ่งร้อยคน ซึ่งพระมหากษัตริย์ทรงเลือกและแต่ง..",
                    "chapter_id": 6,
                    "chapter_name": "รัฐสภา",
                    "part_id": 2,
                    "part_name": "วุฒิสภา"
                }
            ]
        },
        {
            "id": "con2540",
            "name": "รัฐธรรมนูญแห่งราชอาณาจักรไทย พุทธศักราช 2540",
            "topic": "รัฐสภา",
            "prelude": "",
            "chapters": [
                {
                    "id": 6,
                    "name": "รัฐสภา",
                    "from_section_id": 0,
                    "to_section_id": 0,
                    "parts": [
                        {
                            "id": 3,
                            "name": "วุฒิสภา",
                            "from_section_id": 0,
                            "to_section_id": 0
                        }
                    ]
                },
                {
                    "id": 6,
                    "name": "รัฐสภา",
                    "from_section_id": 0,
                    "to_section_id": 0,
                    "parts": [
                        {
                            "id": 3,
                            "name": "วุฒิสภา",
                            "from_section_id": 0,
                            "to_section_id": 0
                        }
                    ]
                }
            ],
            "sections": [
                {
                    "id": "121",
                    "content": "วุฒิสภาประกอบด้วยสมาชิกจำนวนหนึ่งร้อยคน..",
                    "chapter_id": 6,
                    "chapter_name": "รัฐสภา",
                    "part_id": 3,
                    "part_name": "วุฒิสภา"
                },
                {
                    "id": "122",
                    "content": "การเลือกตั้งสมาชิกวุฒิสภา ให้ใช้เขตจังหวัดเป็นเขตเลื...",
                    "chapter_id": 6,
                    "chapter_name": "รัฐสภา",
                    "part_id": 3,
                    "part_name": "วุฒิสภา"
                }
            ]
        }
    ])
});
