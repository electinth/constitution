import constitutionOverview from './constitution-overview.json';

export interface Category {
  id: number;
  title: string;
  color: string;
}

export interface Page {
  categoryId: number;
  pageRatio: number;
}

export interface Constitution {
  id: number;
  name: string;
  year: number;
  context: string;
  isTemporaryEdition: boolean;
  isWrittenByCoup: boolean;
  pageCount: number;
  pages: Page[][];
}

export interface ConstitutionOverview {
  categories: Category[];
  constitutions: Constitution[];
}

export default constitutionOverview as ConstitutionOverview;
