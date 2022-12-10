import { createAction, props } from '@ngrx/store';

import { Dish } from '../../dish.state';
import { User } from '../../user.state';

export const fetchDishesRequestedAction = createAction(
  '[TopCard] Load Dishes Requested'
);

export const fetchUsersRequestedAction = createAction(
  '[TopCard] Load Users Requested'
);

export const fetchDishesSucceededAction = createAction(
  '[TopCard] Load Dishes Succeeded',
  props<{ payload: Dish[] }>()
);

export const fetchUsersSucceededAction = createAction(
  '[TopCard] Load Users Succeeded',
  props<{ payload: User[] }>()
);

export const loadTopCardsFailure = createAction(
  '[TopCard] Load TopCards Failure',
  props<{ error: any }>()
);
