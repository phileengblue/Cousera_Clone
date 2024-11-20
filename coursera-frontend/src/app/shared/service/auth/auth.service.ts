import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environments';

const AUTH_API = `${environment.apiURL}/auth/`;

export interface LogIn {
  email: string;
  password: string;
  roles: [
    {
      name: string;
    }
  ];
  authorization: {
    token: string;
  };
}

export interface SignIn {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  phone_number: string;
  birth_date: Date;
  gender: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  getUserRole() {
    throw new Error('Method not implemented.');
  }
  private http: HttpClient = inject(HttpClient);
  private tokenKey = 'authToken';

  login(login: LogIn): Observable<LogIn> {
    return this.http.post<LogIn>(`${AUTH_API}login`, login).pipe(
      tap((res) => {
        if (res.authorization.token) {
          sessionStorage.setItem('authToken', res.authorization.token);
          sessionStorage.setItem('roles', res.roles[0].name);
          this.isAdmin(res.roles[0].name);
        } 
      })
    );
}



  isAdmin(role: string): string {
    return role;
  }

  

  signin(signin: SignIn): Observable<SignIn> {
    return this.http.post<SignIn>(`${AUTH_API}registerUser`, signin);
  }

  logout() {
    sessionStorage.removeItem('authToken');
    sessionStorage.removeItem('userRole');
    return this.http.post(`${AUTH_API}'logout`, {});
  }

  deleteAccount(id: number): Observable<number> {
    return this.http.delete<number>(`${AUTH_API}'deleteAccount`);
  }

  getToken(): string | null {
    return sessionStorage.getItem(this.tokenKey);
  }

  setToken(token: string): void {
    sessionStorage.setItem(this.tokenKey, token);
  }
}
