import constitutionOverview from './constitution-overview.json';

export interface CategoryOverview {
  id: string;
  title: string;
  shortDesc: string;
  longDesc: string;
  color: string;
}

export interface Page {
  categoryId: string;
  pageRatio: number;
}

export interface Constitution {
  id: string;
  name: string;
  year: number;
  context: string;
  isInterim: boolean;
  isInvolvedWithCoup: boolean;
  pageCount: number;
  pages: Page[][];
}

export interface ConstitutionOverview {
  categories: CategoryOverview[];
  constitutions: Constitution[];
}

export default constitutionOverview as ConstitutionOverview;
