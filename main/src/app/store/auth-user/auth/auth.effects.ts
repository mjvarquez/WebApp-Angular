import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, switchMap } from 'rxjs/operators';
import { Action } from '@ngrx/store';

import { AuthService } from '../auth.service';
import * as authAction from '../auth/auth.actions';
import { User, AuthUser, AuthResponseData, CurrentUserState } from '../../user.state';
import { environment } from 'src/environments/environment';

@Injectable()
export class AuthEffects {

  constructor(private actions$: Actions,
    private http: HttpClient,
    private router: Router,
    private authService: AuthService) { }

  loginUserEffect$: Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(authAction.loginAuthsRequested),
    switchMap((res) => {
      return this.http.post<AuthResponseData>(environment.apiUrl + 'api/auth/login', res).pipe(
        switchMap((authUser: AuthResponseData) => {
          this.authService.loginUser(authUser);
          return [
            authAction.getUserDataRequested()
          ]
        }),
        // catchError((error: Error) => {
        //   this.authService.handleAuthError(error);
        //   return of(NotificationAction.notificationResponse({payload: { type: 'authError', message: 'Username or Password is incorrect!' }}));
        // })
      )
    }
    )
  ));

  fetchUserEffect$: Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(authAction.getUserDataRequested),
    switchMap((res) => {
      return this.http.post<User>(environment.apiUrl + 'api/auth/me', {}).pipe(
        switchMap((authUser: User) => {
          // console.log(authUser)
          this.router.navigate(['/dashboard'])
          return [
            authAction.loginAuthsSucceeded({ payload: authUser }),
          ]
        }),
        // catchError((error: Error) => {
        //   this.authService.handleAuthError(error);
        //   return of(NotificationAction.notificationResponse({payload: { type: 'authError', message: 'Username or Password is incorrect!' }}));
        // })
      )
    }
    )
  ));

}
