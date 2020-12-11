import {
  assertEquals,
} from "https://deno.land/std@0.80.0/testing/asserts.ts";
import { transformPages } from "./overview.ts";

Deno.test('should return correct pages for the temporary 2475 constitution', () => {
  const pages = transformPages([
    { constitutionId: '2475ชั่วคราว', categoryId: 'คำปรารภ', fromPage: 1, toPage: 1.6 },
    { constitutionId: '2475ชั่วคราว', categoryId: 'บททั่วไป', fromPage: 1.6, toPage: 2 },
    { constitutionId: '2475ชั่วคราว', categoryId: 'พระมหากษัตริย์/องคมนตรี', fromPage: 2, toPage: 2.5 },
    { constitutionId: '2475ชั่วคราว', categoryId: 'อำนาจนิติบัญญัติ', fromPage: 2.5, toPage: 6.4 },
    { constitutionId: '2475ชั่วคราว', categoryId: 'อำนาจคณะรัฐประหาร', fromPage: 6.4, toPage: 8.25 },
    { constitutionId: '2475ชั่วคราว', categoryId: 'อำนาจตุลาการ', fromPage: 8.25, toPage: 8.5 },
  ]);

  assertEquals(pages, [
    [{ categoryId: 'คำปรารภ', pageRatio: '0.60' }, { categoryId: 'บททั่วไป', pageRatio: '0.40' }],
    [{ categoryId: 'พระมหากษัตริย์/องคมนตรี', pageRatio: '0.50' }, { categoryId: 'อำนาจนิติบัญญัติ', pageRatio: '0.50' }],
    [{ categoryId: 'อำนาจนิติบัญญัติ', pageRatio: '1.00' }],
    [{ categoryId: 'อำนาจนิติบัญญัติ', pageRatio: '1.00' }],
    [{ categoryId: 'อำนาจนิติบัญญัติ', pageRatio: '1.00' }],
    [{ categoryId: 'อำนาจนิติบัญญัติ', pageRatio: '0.40' }, { categoryId: 'อำนาจคณะรัฐประหาร', pageRatio: '0.60' }],
    [{ categoryId: 'อำนาจคณะรัฐประหาร', pageRatio: '1.00' }],
    [{ categoryId: 'อำนาจคณะรัฐประหาร', pageRatio: '0.25' }, { categoryId: 'อำนาจตุลาการ', pageRatio: '0.25' }],
  ])
});