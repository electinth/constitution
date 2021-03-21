
import { parse as parseFlags } from 'https://deno.land/std@0.80.0/flags/mod.ts';
import { extractFromCsv as extractRecordRowFromCsv } from './extractors/overview/record-row.ts';
import { extractFromCsv as extractConstitutionFromCsv } from './extractors/constitution-row.ts';
import { extractFromCsv as extractCategoryFromCsv } from './extractors/overview/category-row.ts';
import { transform } from './transformers/overview/overview.ts';
import { loadToJson } from './loaders/json.ts';
import { extractConstitution } from './extractors/constitutions/constitution-detail.ts';
import { transform as transFormConstitutionDetail } from './transformers/constitutions/constitution-detail.ts';


const flags = parseFlags(Deno.args);
const outputDirectory = flags.o;
const recordRowCsvPath = flags.recordRowCsvPath;
const constitutionCsvPath = flags.constitutionCsvPath;
const categoryCsvPath = flags.categoryCsvPath;
const constitutionDetailCsvPath = flags.constitutionDetailCsvPath;

loadToJson(await getOverview(), `${outputDirectory}/overview.json`);
loadToJson(await getConstitutions(), `${outputDirectory}/constitution.json`);

async function getOverview() {
  const [ recordRows, cons, cats ] = await Promise.all([
    extractRecordRowFromCsv(recordRowCsvPath),
    extractConstitutionFromCsv(constitutionCsvPath),
    extractCategoryFromCsv(categoryCsvPath),
  ]);
  return transform(recordRows, cons, cats);
}

async function getConstitutions() {
  const rawData = await extractConstitution(constitutionDetailCsvPath, constitutionCsvPath);
  return transFormConstitutionDetail(rawData);
}
