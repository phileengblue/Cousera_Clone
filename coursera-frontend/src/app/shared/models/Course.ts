import { Difficulty } from './Difficulty';

export interface Course {
  id: number;
  title: string;
  description: string;
  language: string;
  // difficulty_level: Difficulty;
  difficulty_level: 'beginner' | 'intermediate' | 'advanced' | 'mixed';
  price: number;
  duration: string;
  category_id: number;
  productTypeDescription:
    | 'guided_project'
    | 'course'
    | 'project'
    | 'specialization'
    | 'professional_certificate'
    | 'degree'
    | 'postgraduate_diploma'
    | 'degree_certificate'
    | 'diploma'
    | 'master';
}
