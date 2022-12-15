import { createAction, props } from '@ngrx/store';

import { VotedDishes } from '../../dish.state';

export const loadSurveyResultsRequestedAction = createAction(
  '[SurveyResult] Load SurveyResults Requested',
);

export const loadSurveyResultsSucceededAction = createAction(
  '[SurveyResult] Load SurveyResults Succeeded',
  props<{ payload: VotedDishes[] }>()
);

// export const addSurveyResultsRequestedAction = createAction(
//   '[SurveyResult] Load SurveyResults Requested',
//   props<{ payload: any }>()
// );

// export const addSurveyResultsSucceededAction = createAction(
//   '[SurveyResult] Load SurveyResults Succeeded',
//   props<{ payload: any }>()
// );

export const loadSurveyResultsFailure = createAction(
  '[SurveyResult] Load SurveyResults Failure',
  props<{ error: any }>()
);
