import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Action } from '@ngrx/store';

import * as surveyResultAction from '../survey-result/survey-result.actions';
import { VotedDishes } from '../../dish.state';
import { environment } from 'src/environments/environment';

@Injectable()
export class SurveyResultEffects {

  constructor(
    private actions$: Actions,
    private http: HttpClient
  ) { }

  fetchSurveyResultsffect$: Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(surveyResultAction.loadSurveyResultsRequestedAction),
    switchMap((res) => {
      return this.http.get<Observable<any>>(environment.apiUrl + `api/resources/surveys`).pipe(
        switchMap((surveyResults: any) => {
          console.log('detals', surveyResults)
          return [
            surveyResultAction.loadSurveyResultsSucceededAction({ payload: surveyResults }),
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
