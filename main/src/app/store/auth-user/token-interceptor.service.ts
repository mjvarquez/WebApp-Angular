import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { exhaustMap, take } from 'rxjs/operators';

// const token_header_key = 'Authorization'

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService {

  constructor(private authService: AuthService,
              private store: Store<any>) { }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    return this.store.select("current_user").pipe(
      take(1),
      exhaustMap(() => {
        const token = localStorage.getItem('token');
        if (!token) {
          return next.handle(req);
        }
        const modifiedRequest = req.clone({
          headers: new HttpHeaders({ 'Authorization': `Bearer ${token}` })
        });
        return next.handle(modifiedRequest);
      })
    )
    // return this.store.select("current_user").pipe(
    //   take(1),
    //   exhaustMap(() => {
    //     let authReq = req;
    //     const token = this.authService.getToken();
    //     if (token != null) {
    //       authReq = req.clone({ headers: req.headers.set(token_header_key, 'Bearer ' + token) });
         
    //     }
    //     return next.handle(authReq);
    //   }))
  }
}

export const tokenInterceptorService = [
  { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptorService, multi: true }
];

