import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, of, tap } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private authTokenKey = 'authToken';

  constructor(private http: HttpClient) {}

  saveToken(token: string): void {
    localStorage.setItem(this.authTokenKey, token);
  }


  logout(): void {
    localStorage.removeItem(this.authTokenKey);
  }

  isLoggedIn(): boolean {
    return !!this.getToken();
  }

  getToken(): string | null {
    return localStorage.getItem(this.authTokenKey);
  }


  loginStudent(email: string, password: string) {
    return this.http
      .post<{ access_token: string }>(environment.api+'/auth/login/student', { email, password })
      .pipe(
        // tap((response) => {
        //   localStorage.setItem('token', response.access_token);
        // }),
      
      catchError((error) => {
        console.error('Greška pri slanju zahteva:', error);
        return of(null); // ili bilo koja druga povratna vrednost
      })
      );
  }

  loginProfesor(email: string, password: string) {
    return this.http
      .post<{ access_token: string }>(environment.api+'/auth/login/profesor', { email, password })
      .pipe(
        tap((response) => {
          // Čuvanje JWT tokena na klijentskoj strani (primer koristi localStorage)
          localStorage.setItem('token', response.access_token);
        }),
      
      catchError((error) => {
        console.error('Greška pri slanju zahteva:', error);
        // Povratna vrednost u slučaju greške
        return of(null); // ili bilo koja druga povratna vrednost
      })
      );
  }
}
