export interface Constitution {
  id: string;
  name: string;
  year: number;
  context: string;
  isTemporaryEdition: boolean;
  isWrittenByCoup: boolean;
  pageCount: number;
  pages: ConstitutionPageCategory[][];
}

export interface ConstitutionPageCategory {
  categoryId: string;
  pageRatio: string;
}