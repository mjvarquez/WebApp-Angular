import { createAction, props } from '@ngrx/store';

import { User, AuthUser } from '../../user.state';

export const loginAuthsRequested = createAction(
  '[Auth] Load Auths Requested',
  props<{ payload: AuthUser }>()
);

export const loginAuthsSucceeded = createAction(
  '[Auth] Load Auths Succeeded',
  props<{ payload: any }>()
);

export const getUserDataRequested = createAction(
  '[Auth] Get User Data Requested',
  props<{ payload: any }>()
);

export const getUserDataSucceeded = createAction(
  '[Auth] Get User Data Succeeded',
  props<{ payload: any }>()
);

export const authLogoutRequested = createAction(
  '[Auth] Auto Logout Requested'
);

export const authLogoutSucceeded = createAction(
  '[Auth] Auto Logout Succeeded'
);

export const loginAuthsFailure = createAction(
  '[Auth] Load Auths Failure',
  props<{ error: any }>()
);


