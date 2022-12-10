import { Action, createReducer, on } from '@ngrx/store';

import { VotedDishes } from '../../dish.state';
import * as surveyResultAction from '../survey-result/survey-result.actions';

export const surveyResultFeatureKey = 'surveyResult';

export const initialState: VotedDishes = {
  voted_dishes: [],
};

export const surveyResultReducer = createReducer(
  initialState,
  on(surveyResultAction.loadSurveyResultsSucceededAction, (state: VotedDishes, { payload }) => {
    return {
      ...state,
      voted_dishes: payload
    }
  }),

);

