import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Action } from '@ngrx/store';

import * as dashboardAction from '../../dashboard/top-card/dashboard.actions';
import { User } from '../../user.state';
import { Dish } from '../../dish.state';
import { environment } from 'src/environments/environment';

@Injectable()
export class DashboardEffects {

  constructor(
    private actions$: Actions,
    private http: HttpClient
  ) { }

  fetchUsersEffect$: Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(dashboardAction.fetchUsersRequestedAction),
    switchMap((res) => {
      return this.http.get<User[]>(environment.apiUrl + `api/resources/users`).pipe(
        switchMap((users: User[]) => {
          return [
            dashboardAction.fetchUsersSucceededAction({ payload: users }),
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
    ofType(dashboardAction.fetchDishesRequestedAction),
    switchMap((res) => {
      return this.http.get<Dish[]>(environment.apiUrl + `api/resources/dishes`).pipe(
        switchMap((dishes: Dish[]) => {
          return [
            dashboardAction.fetchDishesSucceededAction({ payload: dishes }),
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
