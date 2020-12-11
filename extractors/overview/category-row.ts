import { parseCsv } from "../csv.ts";
import { CategoryRow } from "./category-row.model.ts";

export async function extractFromCsv(csvPath: string): Promise<CategoryRow[]> {
  return parseCsv(csvPath, mapCategoryRow);
}

function mapCategoryRow(cells: string[]): CategoryRow {
  return {
    id: cells[0],
    title: cells[1],
    color: cells[2],
  } as CategoryRow;
}