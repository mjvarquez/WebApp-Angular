import { createAction, props } from '@ngrx/store';

import { Dish } from '../../dish.state';
import { User } from '../../user.state';

export const fetchDishesRequestedAction = createAction(
  '[Dashboard] Load Dishes Requested'
);

export const fetchUsersRequestedAction = createAction(
  '[Dashboard] Load Users Requested'
);

export const fetchDishesSucceededAction = createAction(
  '[Dashboard] Load Dishes Succeeded',
  props<{ payload: Dish[] }>()
);

export const fetchUsersSucceededAction = createAction(
  '[Dashboard] Load Users Succeeded',
  props<{ payload: User[] }>()
);

export const loadDashboardsFailure = createAction(
  '[Dashboard] Load Dashboards Failure',
  props<{ error: any }>()
);
