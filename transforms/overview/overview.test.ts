import {
  assertEquals,
} from "https://deno.land/std@0.80.0/testing/asserts.ts";
import { transformPages } from "./overview.ts";

Deno.test('should return correct pages for the temporary 2475 constitution', () => {
  const pages = transformPages([
    { edition: '2475ชั่วคราว', categoryName: 'คำปรารภ', fromPage: 1, toPage: 1.6 },
    { edition: '2475ชั่วคราว', categoryName: 'บททั่วไป', fromPage: 1.6, toPage: 2 },
    { edition: '2475ชั่วคราว', categoryName: 'พระมหากษัตริย์/องคมนตรี', fromPage: 2, toPage: 2.5 },
    { edition: '2475ชั่วคราว', categoryName: 'อำนาจนิติบัญญัติ', fromPage: 2.5, toPage: 6.4 },
    { edition: '2475ชั่วคราว', categoryName: 'อำนาจคณะรัฐประหาร', fromPage: 6.4, toPage: 8.25 },
    { edition: '2475ชั่วคราว', categoryName: 'อำนาจตุลาการ', fromPage: 8.25, toPage: 8.5 },
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