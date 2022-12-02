import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Action } from '@ngrx/store';
import { switchMap, catchError } from 'rxjs/operators';

import * as userAction from './auth.actions';
import { User } from '../user.state';
import { environment } from 'src/environments/environment';

@Injectable()
export class AuthEffects {

  constructor(private actions$: Actions,
              private http: HttpClient) {}

    loadUsersEffect$: Observable<Action> = createEffect(() =>
      this.actions$.pipe(
        ofType(userAction.loadUsersRequested),
        switchMap((res) => {
          return this.http.get<User[]>(environment.apiUrl + 'api/resources/users').pipe(
            switchMap((users: User[]) => {
              return [
                userAction.loadUsersSucceeded({ payload: users })
              ]
            }),
            // catchError((error: Error) => {
            //   return of(userAction.AuthsFailure{ error: error }))
            // })
          )
        })
      ));

    addUsersEffect$: Observable<Action> = createEffect(() =>
      this.actions$.pipe(
        ofType(userAction.addUsersRequested),
        switchMap((res) => {
          return this.http.post<User>(environment.apiUrl + 'api/resources/users', res.payload).pipe(
            switchMap((data: User) => {
              return [
                userAction.addUsersSucceeded({ payload: data })
              ]
            }),
            // catchError((error: Error) => {
            //   return of(userAction.AuthsFailure({ error: error }));
            // })
          )
        })
      ));

    

}
