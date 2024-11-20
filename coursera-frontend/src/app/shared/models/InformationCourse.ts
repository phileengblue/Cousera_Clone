import { Category } from './Category';
import { Difficulty } from './Difficulty';
import { productType } from './ProductType';

export interface InformationCourse {
  categories: Category[];
  difficulty_levels: Difficulty[];
  productTypeDescription: productType[];
}
