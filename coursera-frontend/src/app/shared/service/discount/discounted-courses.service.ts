import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environments';
import { Course } from '../../models/Course';


const COURSE_API = `${environment.apiURL}/course/`;

@Injectable({
  providedIn: 'root'
})
export class DiscountedCoursesService {

  private http: HttpClient = inject(HttpClient);

  // Assicurati che il metodo restituisca un Observable
  getDiscountedCourses(params: any = {}): Observable<any> {
    return this.http.get<any>(`${COURSE_API}MaxiIndex`, { params });
  }
  
  
  

 
  

}
