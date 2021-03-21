export interface Constitution {
  id: string;
  name: string;
  year: number;
  context: string;
  isInterim: boolean;
  isInvolvedWithCoup: boolean;
  pageCount: number;
  pages: ConstitutionPageCategory[][];
}

export interface ConstitutionPageCategory {
  categoryId: string;
  pageRatio: number;
}