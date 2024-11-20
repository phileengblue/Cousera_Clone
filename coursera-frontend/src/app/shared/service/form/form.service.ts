import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environments';
import { Course } from '../../models/Course';


const COURSE_API = `${environment.apiURL}/user/`;


@Injectable({
  providedIn: 'root'
})
export class FormService {

  private http: HttpClient = inject(HttpClient);

  // Assicurati che il metodo restituisca un Observable
  postDiscountedCourses(body: any = {}): Observable<any> {
    return this.http.post<any>(`${COURSE_API}formRegistration`, body);
  }


  }
