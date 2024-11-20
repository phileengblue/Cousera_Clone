export interface ApiResponseFilter {
    courses: CoursesDetailFilter[];
    courseCounts: ModalCategoryCount[];
}

export interface CoursesDetailFilter {
    id: number;
    title: string | null;
    language:
    'inglese'
    | 'italiano'
    | 'francese'
    | 'spagnolo';
    courseImage: string | null;
    productTypeDescription:
    'guided_project'
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
    duration: number | null;
    duration_unit: 'hours' | 'days' | 'weeks' | 'months' | 'years';
    price: number | null;
    university: FilterUniversities;
    average_vote: number | null;
    review_count: number | null;
}

export interface FilterUniversities {
    name: string | null;
    image: string | null;
}


export interface ModalGetFilter {
    keyword?: string,
    category_id?: number[],
    language?: string[],
    productTypeDescription?: ('guided_project' | 'course' | 'project' | 'specialization' | 'professional_certificate' | 'degree' | 'postgraduate_diploma' | 'degree_certificate' | 'diploma' | 'master')[],
    difficulty_level?: ('beginner' | 'intermediate' | 'advanced' | 'mixed')[],
    duration?: any[];
    duration_unit?: ('hours' | 'days' | 'weeks' | 'months' | 'years')[],
    duration_max?: number[],
    duration_min?: number[],
    universities?: string[],
    ordering?: 'corrispondence' |  'recent',
}

export interface modalObject {
    id: string,
    label: string,
    value: number | string,
    selected: boolean,
    totalCourses: unknown;
}

export interface ModalCategoryCount {
    category_count: {
        [category: string]: number,
    },
    difficulty_level_count: {
        [difficultyLevel: string]: number,
    },
    duration_count: {
        [duration: string]: number,
    },
    language_count: {
        [language: string]: number,
    },
    product_type_description_count: {
        [learningProduct: string]: number;
    }
    university_count: {
        [universityName: string]: number;
    },
}