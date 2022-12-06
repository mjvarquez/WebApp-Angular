import { createReducer, on } from '@ngrx/store';

import { DishState } from '../../dish.state';
import * as surveryAction from '../survey/survey.actions';

export const initialState: DishState = {
  dish: []

};

export const surveyReducer = createReducer(
  initialState,
  on(surveryAction.loadSurveysSucceeded, (state: DishState, { payload }) => {
    return {
      ...state,
      dish: payload
    }
  }),


);

