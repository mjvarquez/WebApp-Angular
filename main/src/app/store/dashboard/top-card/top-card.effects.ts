import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Action } from '@ngrx/store';

import * as topCardAction from '../../dashboard/top-card/top-card.actions';
import { User } from '../../user.state';
import { Dish } from '../../dish.state';
import { environment } from 'src/environments/environment';

@Injectable()
export class TopCardEffects {

  constructor(
    private actions$: Actions,
    private http: HttpClient
  ) { }

  fetchUsersEffect$: Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(topCardAction.fetchUsersRequestedAction),
    switchMap((res) => {
      return this.http.get<User[]>(environment.apiUrl + `api/resources/users`).pipe(
        switchMap((users: User[]) => {
          return [
            topCardAction.fetchUsersSucceededAction({ payload: users }),
          ]
        }),
        // catchError((error: Error) => {
        //   this.authService.handleAuthError(error);
        //   return of(NotificationAction.notificationResponse({payload: { type: 'authError', message: 'Username or Password is incorrect!' }}));
        // })
      )
    })
  ));

  fetchDishesEffect$: Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(topCardAction.fetchDishesRequestedAction),
    switchMap((res) => {
      return this.http.get<Dish[]>(environment.apiUrl + `api/resources/dishes`).pipe(
        switchMap((dishes: Dish[]) => {
          return [
            topCardAction.fetchDishesSucceededAction({ payload: dishes }),
          ]
        }),
        // catchError((error: Error) => {
        //   this.authService.handleAuthError(error);
        //   return of(NotificationAction.notificationResponse({payload: { type: 'authError', message: 'Username or Password is incorrect!' }}));
        // })
      )
    })
  ));

}
