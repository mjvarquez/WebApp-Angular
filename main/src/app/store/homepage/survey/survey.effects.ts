import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { HttpClient } from '@angular/common/http';
import { Action } from '@ngrx/store';
import { environment } from 'src/environments/environment';
import { switchMap, catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

import * as surveyAction from '../survey/survey.actions';
import { Dish, VotedDishes } from '../../dish.state';

@Injectable()
export class SurveyEffects {

  constructor(private actions$: Actions,
    private http: HttpClient) { }

  loadSurveysEffects$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(surveyAction.loadSurveysRequested),
      switchMap((res) => {
        return this.http.get<Dish[]>(environment.apiUrl + `api/resources/dishes`).pipe(
          switchMap((dishes: Dish[]) => {
            return [
              surveyAction.loadSurveysSucceeded({ payload: dishes })
            ]
          }),
          catchError((error: Error) => {
            return of(surveyAction.surveysFailure({ error: error }));
          })
        )
      })
    ));

  addSurveysEffects$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(surveyAction.addSurveysRequested),
      switchMap((res) => {
        return this.http.post<VotedDishes>(environment.apiUrl + `api/resources/surveys`, res.payload).pipe(
          switchMap((votedDishes: VotedDishes) => {
            return [
              surveyAction.addSurveysSucceeded({ payload: votedDishes })
            ]
          }),
          catchError((error: Error) => {
            return of(surveyAction.surveysFailure({ error: error }));
          })
        )
      })
    ));

}
