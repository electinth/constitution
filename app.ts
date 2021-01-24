
import { parse as parseFlags } from 'https://deno.land/std@0.80.0/flags/mod.ts';
import { extractFromCsv as extractRecordRowFromCsv } from './extractors/overview/record-row.ts';
import { extractFromCsv as extractConstitutionFromCsv } from './extractors/constitution-row.ts';
import { extractFromCsv as extractCategoryFromCsv } from './extractors/overview/category-row.ts';
import { transform } from './transformers/overview/overview.ts';
import { loadToJson } from './loaders/json.ts';

const flags = parseFlags(Deno.args);
const outputDirectory = flags.o;
const recordRowCsvPath = flags.recordRowCsvPath;
const constitutionCsvPath = flags.constitutionCsvPath;
const categoryCsvPath = flags.categoryCsvPath;

loadToJson(await getOverview(), `${outputDirectory}/overview.ts`);

async function getOverview() {
  const [ recordRows, cons, cats ] = await Promise.all([
    extractRecordRowFromCsv(recordRowCsvPath),
    extractConstitutionFromCsv(constitutionCsvPath),
    extractCategoryFromCsv(categoryCsvPath),
  ]);
  return transform(recordRows, cons, cats);
}