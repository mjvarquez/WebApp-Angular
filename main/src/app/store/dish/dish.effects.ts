import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { switchMap, catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { Action } from '@ngrx/store';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

import * as dishAction from './dish.actions'
import { Dish } from '../dish.state';

@Injectable()
export class DishEffects {

  constructor(private actions$: Actions,
              private http: HttpClient) {}

  loadDishesEffects$: Observable<Action> = createEffect(() => 
    this.actions$.pipe(
      ofType(dishAction.loadDishesRequested), 
      switchMap((res) => {
        return this.http.get<Dish[]>(environment.apiUrl + `api/resources/dishes`).pipe(
          switchMap((dishes: Dish[]) => {
            return [
              dishAction.loadDishesSucceeded({ payload: dishes})
            ]
          }),
          catchError((error: Error) => {
            return of(dishAction.DishesFailure({ error: error }));
          })
        )
      })
  ));

  // addDishEffect$: Observable<Action> = createEffect(() =>
  //   this.actions$.pipe(
  //     ofType(dishAction.addDishesRequested),
  //     switchMap((res) => {
  //       return this.http.post<Dish>(environment.apiUrl + 'api/resources/dishes', res.payload).pipe(
  //         switchMap((data: Dish) => {
  //           return [
  //             dishAction.addDishesSucceeded({ payload: data })
  //           ]
  //         }),
  //         catchError((error: Error) => {
  //           return of(dishAction.DishesFailure({ error: error }));
  //         })
  //       )
  //     })
  //   ));
  
}
