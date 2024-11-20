export interface CourseDC {
  img: string;
  title: string;
  subtitle: string;
  logo: string;
  instructor: string;
  hasMainInstructor: boolean;
  help: string;
  registered: string;
  plus: string;

  series: string;
  credential: string;
  infoImg: string;

  rateText: CourseRate[];
  level: string;
  hours: string;

  info: CourseInfo;
  results: CourseResults;

  information?: Company[];
  macroCategory: string;
}

interface Company {
  name: string;
  courses: number;
  participants: string;
}

interface CourseRate {
  rate: string;
  star: string;
  review: string;
}

interface CourseText {
  text: string;
}

interface CourseSkills {
  skill: string;
}

interface CourseInfo {
  textArray: CourseText[];
  skills: CourseSkills[];
}

interface CourseResults {
  job_img: string;
  salary: string;
  job_positions: string;
  positive_outcome: string;
  texts: CourseString[];
  job_title: string;
}

interface CourseString {
  text: string;
}

export interface CourseAccess {
  summary: IconText[];
  img_folder: CourseImg[];
  connect: string;
  info: string;
  letter: string;
  description: string;
  img_letter: string;
}

interface CourseImg {
  img_access: string;
}

interface IconText {
  icon: string;
  label: string;
  title: string;
}

export interface CourseAccordion {
  title: string;
  series: string;
  contex: Text[];
  course_info: SingleCourse[];
}

interface Text {
  text: string;
  isBold?: boolean;
}

interface SingleCourse {
  course_title: string;
  course_id: number;
  course_hours: string;
  multi_text: Learn[];
  course_rate: CourseRate[];
  skills: CourseSkills[];
}

interface Learn {
  text: string;
}

export interface StartDegree {
  text: string;
  img_credit: string;
  text_degree: string;
}

export interface Carousel {
  img: string;
  review: string;
  name: string;
  course: string;
}

export interface CardStart {
  title: string;
  date: string;
  subtitle: string;
  duration?: string;
}

export interface CardSection {
  title: string;
  text: string;
  img_card: string;
  href: string;
}

export interface Question {
  title: string;
  question: string;
}

export interface CourseApi {
  title: string;
  description: string;
  language: string;
  duration: number;
  price: number;
  category_id: number;

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
