import { createAction, props } from '@ngrx/store';

import { MenuForToday } from '../../dish.state';

export const loadMenusRequestedAction = createAction(
  '[Menu] Load Menus Requested'
);

export const loadMenusSucceededAction = createAction(
  '[Menu] Load Menus Succeeded',
  props<{ payload: MenuForToday[] }>()
);

export const loadMenusFailure = createAction(
  '[Menu] Load Menus Failure',
  props<{ error: any }>()
);
