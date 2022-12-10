import { Action, createReducer, on } from '@ngrx/store';

import { User } from '../../user.state';
import { Dish } from '../../dish.state';
import * as topCard from '../../dashboard/top-card/top-card.actions';

export const topCardFeatureKey = 'topCard';

export interface DishUserState {
  dish: Dish[],
  user: User[]
}

export const initialState: DishUserState = {
  dish: [],
  user: []
};

export const topCardReducer = createReducer(
  initialState,
  on(topCard.fetchDishesSucceededAction, (state: DishUserState, { payload }) => {
    return {
      ...state,
      dish: payload
    }
  }),
  on(topCard.fetchUsersSucceededAction, (state: DishUserState, { payload }) => {
    return {
      ...state,
      user: payload
    }
  })
);

