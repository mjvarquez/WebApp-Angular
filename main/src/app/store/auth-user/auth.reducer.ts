import { Action, createReducer, on } from '@ngrx/store';

import { User, UserState } from '../user.state';
import * as userAction from '../auth-user/auth.actions';
import { state } from '@angular/animations';

export const usersFeatureKey = 'users';

export const initialState: UserState = {
  user: [],
};

export const UserReducer = createReducer(
  initialState,

  on(userAction.loadUsersSucceeded, (state: UserState, { payload }) => {
    return {
      ...state,
      user: payload
    }
  }),
  on(userAction.addUsersSucceeded, (state: UserState, { payload }) => {
    let data: User = {
      name: payload.name,
      email: payload.email,
      password: payload.password,
      role_id: payload.role_id
    }
    return{ ...state, payload: data }
  }),

  

);

