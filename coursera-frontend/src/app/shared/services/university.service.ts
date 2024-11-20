import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environments';
import { ApiResponse,  } from '../models/university';

const COURSE_API = `${environment.apiURL}/course/`;

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  private http: HttpClient = inject(HttpClient);

  getCarouselCards(): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(`${COURSE_API}MasterDegreeCourses`);
  }
}
