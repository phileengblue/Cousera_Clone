export interface Certificati { 
    id: string, 
    tag: string, 
    company: string, 
    title: string, 
    description: string, 
    urlpage: string, 
    urlimg: string 
}

export interface NbCertificati { 
    id: string, 
    category: string, 
    company: string, 
    title: string, 
    description: string, 
    urlpage: string, 
    urlimg: string 
}

export interface TCcard { 
    id: string,
    categorLav: string, 
    tag: string, 
    title: string, 
    description: string, 
    key: string[], 
    stipendioM: number, 
    postiL: number, 
    imgCard: string 
}

export interface link { 
    id: string, 
    category: string, 
    title: string, 
    urlpage: string 
}

