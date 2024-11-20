import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environments';
import { User } from '../../models/User';
import { Professor } from '../../models/Professor';

const PROFESSOR_API = `${environment.apiURL}/user/`;

@Injectable({
  providedIn: 'root',
})
export class ProfessorService {
  private http: HttpClient = inject(HttpClient);

  getProfessor(): Observable<User[]> {
    return this.http.get<User[]>(`${PROFESSOR_API}index`);
  }

  addProfessor(professor: Professor): Observable<Professor> {
    return this.http.post<Professor>(`${PROFESSOR_API}addProfessor`, professor);
  }
}
