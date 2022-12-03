import { Action, createReducer, on } from '@ngrx/store';

import { User, UserState } from '../user.state';
import * as userAction from '../auth-user/auth.actions';

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
  on(userAction.deleteUsersRequested, (state: UserState, { id }) => {
    let getData = state.user
    let newData = getData.filter(item => item.id !== id)

    return { ...state, user: newData }
  }),
  on(userAction.updateUsersSucceeded, (state: UserState, { payload }) => {
    let updateUser = state.user.map((user) => {
      return payload.id === user.id ? payload : user;
    })
    return { ...state, user: updateUser }
  })

);

