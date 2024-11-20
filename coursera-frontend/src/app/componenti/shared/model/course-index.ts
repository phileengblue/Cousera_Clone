export interface arryImage {
    path: string;
    name: string;
    extension: string;
    type: string;
    url: string;
}
 export interface arrayuniversity {
    id: number;
    name: string;
    image: arryImage[];
}
export interface CourseIndex {
    id: number; 
    title: string; 
    category_id: number | null;
    image: arryImage[];
    university: arrayuniversity[];
};

export interface Materia { 
    id: number; 
    value: string; 
}

export interface laurea { 
    id: string, 
    category: string, 
    university: string, 
    title: string, 
    urlpage: string, 
    urlimg: string 
}




