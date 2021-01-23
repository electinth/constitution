import {
    assertEquals,
} from "https://deno.land/std@0.80.0/testing/asserts.ts";
import { transform } from "./constitution-detail.ts";


Deno.test('should return correct format for constitution data', () => {
    const constitutions = transform([
        {
            topic: "ที่มา",
            name: "2489",
            chapter_number: "3",
            chapter: "อำนาจนิติบัญญัติ",
            part_number: "2",
            part: "พฤฒสภา",
            section: "24",
            content: "พฤฒสภาประกอบด้วยสมาชิกที่ราษฎรเลือกตั้งมีจำนวนแปดสิบคน สมาชิกพฤฒสภาต้องไม่เป็นข้าราชการประจำ การเลือกตั้งสมาชิกพฤฒสภา ให้ใช้วิธีลงคะแนนออกเสียงโดยทางอ้อมและลับ",
        },
        {
            topic: "อำนาจหน้าที่",
            name: "2489",
            chapter_number: "1",
            chapter: "พระมหากษัตริย์",
            part_number: "-",
            part: "-",
            section: "11",
            content: "ในกรณีที่ราชบัลลังก์หากว่างลง และมิได้มีผู้สำเร็จราชการแทนพระองค์ตั้งไว้ตามความในมาตรา 10 ให้สมาชิกพฤฒสภาผู้มีอายุสูงสุดสามคนประกอบเป็นคณะผู้สำเร็จราชการแทนพระองค์ขึ้นชั่วคราว",
        },
        {
            topic: "อำนาจหน้าที่",
            name: "2489",
            chapter_number: "3",
            chapter: "อำนาจนิติบัญญัติ",
            part_number: "1",
            part: "บททั่วไป",
            section: "18",
            content: "ร่างพระราชบัญญัติทั้งหลายจะตราขึ้นเป็นกฎหมายได้แต่โดยคำแนะนำและยินยอมของรัฐสภา",
        },
    ]);

    assertEquals(constitutions, [
        {
            "name": "2489",
            "topic": "ที่มา",
            "prelude": "",

            "chapters": [{
                "id": "3",
                "name": "อำนาจนิติบัญญัติ",
                "from_section_id": "",
                "to_section_id": "",
                "parts": [{
                    "id": "2",
                    "name": "พฤฒสภา",
                    "from_section_id": "",
                    "to_section_id": ""
                }]
            }],

            "sections": [{
                "id": "24",
                "content": "พฤฒสภาประกอบด้วยสมาชิกที่ราษฎรเลือกตั้งมีจำนวนแปดสิบคน สมาชิกพฤฒสภาต้องไม่เป็นข้าราชการประจำ การเลือกตั้งสมาชิกพฤฒสภา ให้ใช้วิธีลงคะแนนออกเสียงโดยทางอ้อมและลับ",
                "chapter_id": "3",
                "chapter_name": "อำนาจนิติบัญญัติ",
                "part_id": "2",
                "part_name": "พฤฒสภา"
            }],
        },
        {
            "name": "2489",
            "topic": "อำนาจหน้าที่",
            "prelude": "",

            "chapters": [
                {
                    "id": "1",
                    "name": "พระมหากษัตริย์",
                    "from_section_id": "",
                    "to_section_id": "",
                    "parts": [{
                        "id": "-",
                        "name": "-",
                        "from_section_id": "",
                        "to_section_id": ""
                    }]
                },
                {
                    "id": "3",
                    "name": "อำนาจนิติบัญญัติ",
                    "from_section_id": "",
                    "to_section_id": "",
                    "parts": [{
                        "id": "1",
                        "name": "บททั่วไป",
                        "from_section_id": "",
                        "to_section_id": ""
                    }]
                },

            ],

            "sections": [
                {
                    "id": "11",
                    "content": "ในกรณีที่ราชบัลลังก์หากว่างลง และมิได้มีผู้สำเร็จราชการแทนพระองค์ตั้งไว้ตามความในมาตรา 10 ให้สมาชิกพฤฒสภาผู้มีอายุสูงสุดสามคนประกอบเป็นคณะผู้สำเร็จราชการแทนพระองค์ขึ้นชั่วคราว",
                    "chapter_id": "1",
                    "chapter_name": "พระมหากษัตริย์",
                    "part_id": "-",
                    "part_name": "-"
                },
                {
                    "id": "18",
                    "content": "ร่างพระราชบัญญัติทั้งหลายจะตราขึ้นเป็นกฎหมายได้แต่โดยคำแนะนำและยินยอมของรัฐสภา",
                    "chapter_id": "3",
                    "chapter_name": "อำนาจนิติบัญญัติ",
                    "part_id": "1",
                    "part_name": "บททั่วไป"
                }
            ],
        },
    ])
});
