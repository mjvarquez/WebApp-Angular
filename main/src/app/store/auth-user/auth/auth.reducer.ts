import { createReducer, on } from '@ngrx/store';

import { CurrentUserState, } from '../../user.state';
import * as authAction from '../../auth-user/auth/auth.actions';

export const initialState: CurrentUserState = {
  user: undefined,
  token: ''
};

export const authReducer = createReducer(
  initialState,
  on(authAction.loginAuthsSucceeded, (state: CurrentUserState, { payload }) =>{
    const token:any = localStorage.getItem('token');

    return { ...state, user: payload, token: token};
  }),
);

