import { Action, createReducer, on } from '@ngrx/store';

import { MenuForToday } from '../../dish.state';
import * as menuResultAction from './menu.actions';

export const menuFeatureKey = 'menu';

export const initialState: MenuForToday = {
  menu: [],
};

export const menuReducer = createReducer(
  initialState,
  on(menuResultAction.loadMenusSucceededAction, (state: MenuForToday, { payload }) => {
    return {
      ...state,
      menu: payload
    }
  }),
);

