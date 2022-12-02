import { createReducer, on } from '@ngrx/store';

import { DishState } from '../dish.state';
import * as dishAction from './dish.actions';

export const dishFeatureKey = 'dishes';

export const initialState: DishState = {
  dish: [],
};

export const DishReducer = createReducer(
  initialState,
  on(dishAction.loadDishesSucceeded, (state: DishState, { payload }) => {
      return {
        ...state,
        ...payload
      }
  }),


);

