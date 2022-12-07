import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Store } from "@ngrx/store";

// const token_key = 'auth-token'
// const user_key = 'auth-user'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private tokenExpirationTimer: any;

  constructor(private router: Router,
              private http: HttpClient,
              private store: Store) { }

  loginUser(data: any) {
    localStorage.setItem('token', data.access_token)
  }

  signOut() {
    window.localStorage.clear();
    this.router.navigate(['/login'])
  }

  // saveToken(token: string): void {
  //   window.localStorage.removeItem(token_key);
  //   window.localStorage.setItem(token_key, token);
  // }

  // getToken(): string | null {
  //   return window.localStorage.getItem(token_key);
  // }

  // saveUser(user: any): void {
  //   window.localStorage.removeItem(user_key);
  //   window.localStorage.setItem(user_key, JSON.stringify(user));
  // }

  // getUser(): any {
  //   const user = window.localStorage.getItem(user_key);
  //   if (user) {
  //     return JSON.parse(user);
  //   }
  //   return {};
  // }
}
