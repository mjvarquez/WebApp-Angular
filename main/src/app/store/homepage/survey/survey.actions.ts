import { createAction, props } from '@ngrx/store';

import { Dish, VotedDishes } from '../../dish.state';

export const loadSurveysRequested = createAction(
  '[Survey] Load Surveys Requested'
);

export const loadSurveysSucceeded = createAction(
  '[Survey] Load Surveys Succeeded',
  props<{ payload: Dish[] }>()
);

export const addSurveysRequested = createAction(
  '[Survey] Add Surveys Requested',
  props<{ payload: VotedDishes }>()
);

export const addSurveysSucceeded = createAction(
  '[Survey] Add Surveys Succeeded',
  props<{ payload: VotedDishes }>()
);

export const surveysFailure = createAction(
  '[Survey] Surveys Failure',
  props<{ error: any }>()
);
