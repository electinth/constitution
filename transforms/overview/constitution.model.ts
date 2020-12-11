export interface Constitution {
  id: number;
  name: string;
  year: number;
  context: string;
  isTemporaryEdition: boolean;
  isWrittenByCoup: boolean;
  pageCount: number;
  pages: ConstitutionPageCategory[][];
}

export interface ConstitutionPageCategory {
  categoryId: number | string;
  pageRatio: string;
}