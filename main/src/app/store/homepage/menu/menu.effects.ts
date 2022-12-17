import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Action } from '@ngrx/store';

import * as menuResultAction from './menu.actions';
import { environment } from 'src/environments/environment';

@Injectable()
export class MenuEffects {

  constructor(
    private actions$: Actions,
    private http: HttpClient
  ) { }

  fetchMenuseffect$: Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(menuResultAction.loadMenusRequestedAction),
    switchMap((res) => {
      return this.http.get<Observable<any>>(environment.apiUrl + `api/resources/surveys`).pipe(
        switchMap((menu: any) => {
          console.log(menu)
          return [
            menuResultAction.loadMenusSucceededAction({ payload: menu }),
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
