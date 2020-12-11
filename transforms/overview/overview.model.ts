import { Category } from "./category.model.ts";
import { Constitution } from "./constitution.model.ts";

export interface Overview {
  categories: Category[];
  constitutions: Constitution[];
}