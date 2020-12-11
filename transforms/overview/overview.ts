import { RecordRow } from '../../extractors/overview/record-row.model.ts';
import { ConstitutionPageCategory } from './constitution.model.ts';
import { Overview } from './overview.model.ts';

export function transform(rows: RecordRow[]): Overview {
  return { categories: [], constitutions: [] };
}

export function transformPages(rows: RecordRow[]): ConstitutionPageCategory[][] {
  rows.sort((first, second) => 
    first.fromPage === second.fromPage ? 0 :
    first.fromPage > second.fromPage ? 1 : -1
  );

  const pages: ConstitutionPageCategory[][] = [];
  const maxPage = Math.floor(rows[rows.length - 1].toPage);
  for (let i = 0; i < maxPage; i++) pages.push([]);

  let progress = 1;

  for (const row of rows) {
    let rowRemainer = row.toPage - row.fromPage;

    while (rowRemainer > 0) {
      const currentPageRemainer = getNextPage(progress) - progress;
      if (currentPageRemainer > rowRemainer) {
        // The remainer of the catogery can be fitted to current page
        pages[Math.floor(progress) - 1].push({
          categoryId: row.categoryName,
          pageRatio: rowRemainer.toFixed(2)
        });
        progress += rowRemainer;
        rowRemainer = 0;
      } else {
        pages[Math.floor(progress) - 1].push({
          categoryId: row.categoryName,
          pageRatio: currentPageRemainer.toFixed(2)
        });
        progress += currentPageRemainer;
        rowRemainer -= currentPageRemainer;
      }
    }
  }

  // for (const row of rows) {
    
  //   if (Number.isInteger(latestFilled)) {
  //     const latestFilledRemainer = Math.ceil(latestFilled) - latestFilled;
  //     pages[Math.floor(row.fromPage) - 1].push({ categoryId: row.categoryName, pageRatio: latestFilledRemainer });
  //     latestFilled += latestFilledRemainer;
  //   }
  //   const pagesPerRow = latestFilled - row.toPage;
  //   let remainer = pagesPerRow;
  //   for (let i = 0; i <= pagesPerRow; i++) {
  //     if (remainer <= 1) {
  //       pages[Math.floor(row.fromPage) - 1 + i].push({ categoryId: row.categoryName, pageRatio: remainer });
  //     } else {
  //       pages[Math.floor(row.fromPage) - 1 + i].push({ categoryId: row.categoryName, pageRatio: 1 });
  //     } 
  //     remainer -= 1;
  //   }

  //   latestFilled = row.toPage;
  // }

  return pages;
}


function getNextPage(target: number): number {
  if (Number.isInteger(target)) {
    return target + 1;
  }
  return Math.ceil(target);
}
