import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

const apiurl = 'http://localhost:8080/api/auth/';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class UserauthService {
  isLoggedInError = new EventEmitter<boolean>(false);

  constructor(private http: HttpClient, private router: Router) {}
  login(email: string, password: string): Observable<any> {
    return this.http.post(apiurl + 'login', { email, password }, httpOptions);
  }

  register(username: string, email: string, password: string): Observable<any> {
    return this.http.post(
      apiurl + 'register',
      { username, email, password },
      httpOptions
    );
  }

  logout(): void {
    sessionStorage.removeItem('authToken');
    this.router.navigate(['login']);
  }

  isAuthenticated(): boolean {
    if (typeof window !== 'undefined' && window.sessionStorage) {
      return !!sessionStorage.getItem('authToken');
    } else return false;
  }
}
