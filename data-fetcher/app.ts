
import { parse as parseFlags } from 'flags/mod.ts';
import { ensureDir } from 'fs/mod.ts';
import { extractFromCsv as extractRecordRowFromCsv } from './extractors/overview/record-row.ts';
import { extractFromCsv as extractConstitutionFromCsv } from './extractors/constitution-row.ts';
import { extractFromCsv as extractCategoryFromCsv } from './extractors/overview/category-row.ts';
import { transform } from './transformers/overview/overview.ts';
import { loadToJson } from './loaders/json.ts';
import { extractConstitution } from './extractors/constitutions/constitution-detail.ts';
import { transform as transFormConstitutionDetail } from './transformers/constitutions/constitution-detail.ts';


const flags = parseFlags(Deno.args);
const outputDirectory = flags.o;
const recordRowCsvPath = guardEmptyString(flags.recordRowCsvPath, 'https://docs.google.com/spreadsheets/d/e/2PACX-1vRUq2kWVN8fopcNaLP1iRRumPlzxzbke-ppkeaFMXpX0OOsQpYbKhEGPyrJdPx4sXaNjOB7MBtaOyxs/pub?gid=967540758&single=true&output=csv');
const constitutionCsvPath =  guardEmptyString(flags.constitutionCsvPath, 'https://docs.google.com/spreadsheets/d/e/2PACX-1vRUq2kWVN8fopcNaLP1iRRumPlzxzbke-ppkeaFMXpX0OOsQpYbKhEGPyrJdPx4sXaNjOB7MBtaOyxs/pub?gid=210965472&single=true&output=csv');
const categoryCsvPath =  guardEmptyString(flags.categoryCsvPath, 'https://docs.google.com/spreadsheets/d/e/2PACX-1vRUq2kWVN8fopcNaLP1iRRumPlzxzbke-ppkeaFMXpX0OOsQpYbKhEGPyrJdPx4sXaNjOB7MBtaOyxs/pub?gid=971764486&single=true&output=csv');
const constitutionDetailCsvPath =  guardEmptyString(flags.constitutionDetailCsvPath, 'https://docs.google.com/spreadsheets/d/e/2PACX-1vRUq2kWVN8fopcNaLP1iRRumPlzxzbke-ppkeaFMXpX0OOsQpYbKhEGPyrJdPx4sXaNjOB7MBtaOyxs/pub?gid=144576065&single=true&output=csv');

ensureDir(outputDirectory);

loadToJson(await getOverview(), `${outputDirectory}/constitution-overview.json`);
loadToJson(await getConstitutions(), `${outputDirectory}/constitutions.json`);

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

function guardEmptyString(inspected: string | boolean, guardWith: string): string {
  if (inspected === '' || inspected === true || !inspected) {
    return guardWith;
  }
  return inspected as string;
}