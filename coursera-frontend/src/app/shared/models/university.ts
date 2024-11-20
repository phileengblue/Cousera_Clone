export interface ApiResponse {
    message: string;
    courses: university;
  }
  
  export interface university {
    popular_courses: CourseDetail[];
    new_courses: CourseDetail[];
    free_courses: CourseDetail[];
    degree_courses: CourseDetail[];
    hight_level_degrees: CourseDetail[];
  }
  
  export interface CourseDetail {
    title: string;
    description: string;
    language: string;
    duration: number;
    price: number;
    category_id: number;
    filestorage_id: string | null;
  
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
  }
  
  export interface University {
    name: string;
    description: string;
    file_img: File | null;
  }