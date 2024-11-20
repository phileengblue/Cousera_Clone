import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environments';
import { University } from '../../models/University';

const UNIVERSITY_API = `${environment.apiURL}/university/`;

@Injectable({
  providedIn: 'root',
})
export class UniversityService {
  private http: HttpClient = inject(HttpClient);

  getUniversity(): Observable<University[]> {
    return this.http.get<University[]>(`${UNIVERSITY_API}index`);
  }

  addUniversity(formData: FormData): Observable<any> {
    return this.http.post<any>(`${UNIVERSITY_API}store`, formData);
  }
}
