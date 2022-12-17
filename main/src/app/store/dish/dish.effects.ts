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
    private http: HttpClient) { }

  loadDishesEffects$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(dishAction.loadDishesRequested),
      switchMap(() => {
        return this.http.get<Dish[]>(environment.apiUrl + `api/resources/dishes`).pipe(
          switchMap((dishes: Dish[]) => {
            return [
              dishAction.loadDishesSucceeded({ payload: dishes })
            ]
          }),
          catchError((error: Error) => {
            return of(dishAction.DishesFailure({ error: error }));
          })
        )
      })
    ));

  addDishesEffect$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(dishAction.addDishesRequested),
      switchMap((res) => {
        return this.http.post<Dish>(environment.apiUrl + 'api/resources/dishes', res.payload).pipe(
          switchMap((dish: Dish) => {
            return [
              dishAction.addDishesSucceeded({ payload: dish })
            ]
          }),
          catchError((error: Error) => {
            return of(dishAction.DishesFailure({ error: error }));
          })
        )
      })
    ));

  deleteDishesEffect$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(dishAction.deleteDishesRequested),
      switchMap((res) => {
        return this.http.delete<number>(environment.apiUrl + `api/resources/dishes/${res.id}`).pipe(
          switchMap((res) => {
            return [
              dishAction.deleteDishesSucceeded({ id: res })
            ]
          }),
          catchError((error: Error) => {
            return of(dishAction.DishesFailure({ error: error }));
          })
        )
      })
    ));

  updateDishesEffect$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(dishAction.updateDishesRequested),
      switchMap((res) => {
        return this.http.put<Dish>(environment.apiUrl + `api/resources/dishes/${res.payload.dishId}`, res.payload.updateDish).pipe(
          switchMap((dish: Dish) => {
            return [
              dishAction.updateDishesSucceeded({ payload: dish })
            ]
          }),
          catchError((error: Error) => {
            return of(dishAction.DishesFailure({ error: error }));
          })
        )
      })
    ));

}
