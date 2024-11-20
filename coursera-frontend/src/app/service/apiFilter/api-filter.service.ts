import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiResponseFilter, ModalGetFilter } from 'src/app/componenti/shared/model/filterCourse';
import { environment } from 'src/environments/environments';

@Injectable({
  providedIn: 'root'
})
export class ApiFilterService {

  private apiUrlFilterCourse = `${environment.apiURL}/filter/filter`;

  constructor(private http: HttpClient) { }

  getApiFilter(params: {}): Observable<ApiResponseFilter[]> {
    return this.http.get<ApiResponseFilter[]>(`${this.apiUrlFilterCourse}`, { params });
  }

  getFilter(modal: ModalGetFilter): Observable<any> {
    let params: string[] = [];
    
    if (modal.keyword) {
      params.push(`keyword=${modal.keyword}`)
    }
    if (Array.isArray(modal.category_id) && modal.category_id.length > 0) {
      modal.category_id.forEach((id, index) => { params.push(`category_id[]=${id}`) })
    }
    if (Array.isArray(modal.language) && modal.language.length > 0) {
      modal.language.forEach(lang => { params.push(`language[]=${lang}`) })
    } 
    if (Array.isArray(modal.productTypeDescription) && modal.productTypeDescription.length > 0) {
      modal.productTypeDescription.forEach(pTD => { params.push(`productTypeDescription[]=${pTD}`) })
    }
    if (Array.isArray(modal.difficulty_level) && modal.difficulty_level.length > 0) {
      modal.difficulty_level.forEach(level => { params.push(`difficulty_level[]=${level}`) })
    }
    if (Array.isArray(modal.duration) && modal.duration.length > 0) {
      console.log("modal.duration",modal.duration)
      modal.duration.forEach(unit => { 
          params.push(`duration_unit=${unit[0]}&duration_min=${unit[1]}&duration_max=${unit[2]}`)})
    }
    if (Array.isArray(modal.universities) && modal.universities.length > 0) {
      modal.universities.forEach(uni => { params.push(`university[]=${uni}`) })
    }
    if(modal.ordering){
      params.push(`ordering=${modal.ordering}`)
    }
    const queryString = params.join('&');
    console.log("queryString", queryString);
    return this.http.get(`${this.apiUrlFilterCourse}?${queryString}`);
  }

  getAPiCoursesFromInputSerchBar(inputSearchBar:string):Observable<object> {
    return this.http.get(`${this.apiUrlFilterCourse}?keyword=${inputSearchBar}`)
  }

}
