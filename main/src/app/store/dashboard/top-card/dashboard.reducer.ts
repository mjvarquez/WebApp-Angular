import { Action, createReducer, on } from '@ngrx/store';

import { User } from '../../user.state';
import { Dish } from '../../dish.state';
import * as dashboardAction from '../../dashboard/top-card/dashboard.actions';

export const dashboardFeatureKey = 'dashboard';

export interface DishUserState {
  dish: Dish[],
  user: User[]
}

export const initialState: DishUserState = {
  dish: [],
  user: []
};

export const DashboardReducer = createReducer(
  initialState,
  on(dashboardAction.fetchDishesSucceededAction, (state: DishUserState, { payload }) => {
    return {
      ...state,
      dish: payload
    }
  }),
  on(dashboardAction.fetchUsersSucceededAction, (state: DishUserState, { payload }) => {
    return {
      ...state,
      user: payload
    }
  })
);

