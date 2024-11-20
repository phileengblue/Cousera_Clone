export interface ApiResponse {
  message: string;
  courses: CardHome;
}

export interface CardHome {
  popular_courses: CourseDetail[];
  new_courses: CourseDetail[];
  free_courses: CourseDetail[];
  degree_courses: CourseDetail[];
  hight_level_degrees: CourseDetail[];
}

export interface CourseDetail {
universityName: any;
universities: any;
logoUrl: any;
imageUrl: any;
apiUrl: any;
  id: number;
  title: string;
  description: string;
  language: string;
  duration: number;
  price: number;
  category_id: number;
  parent_id: number | null;
  filestorage_id: number | null;
  created_at: string | null;
  updated_at: string | null;
  
  duration_unit: 'hours' | 'days' | 'weeks' | 'months' | 'years';
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

  difficulty_level: 'beginner' | 'intermediate' | 'advanced' | 'mixed';
  filestorage: FileStorage;
}

export interface FileStorage {
  id: number;
  path: string;
  name: string;
  extension: string;
  type: string;
  created_at: string | null;
  updated_at: string | null;
}

export interface universities {
id: number,
name: string,
description: string,
filestorage_id: number,
pivot:any
course_id: number,
university_id: number,
}
