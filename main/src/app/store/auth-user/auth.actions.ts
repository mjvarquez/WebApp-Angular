import { createAction, props } from '@ngrx/store';

import { User } from '../user.state';
// Fetching data
export const loadUsersRequested = createAction(
  '[Auth] Load Users Requested'
);

export const loadUsersSucceeded = createAction(
  '[Auth] Load Users Succeeded',
  props<{ payload: User[] }>()
);

export const addUsersRequested = createAction(
  '[Auth] Add Users Requested',
  props<{ payload: User }>()
);

export const addUsersSucceeded = createAction(
  '[Auth] Add Users Succeeded',
  props<{ payload: User }>()
);

export const deleteUsersRequested = createAction(
  '[Auth] Delete Users Requested',
  props<{ id: number }>()

);

export const deleteUsersSucceeded = createAction(
  '[Auth] Delete Users Succeeded',
  props<{ id: number }>()
);

export const updateUsersRequested = createAction(
  '[Auth] Update Users Requested',
  props<{ payload: { userId: number, updateUser: User }}>()
);

export const updateUsersSucceeded = createAction(
  '[Auth] Update Users Succeeded',
  props<{ payload: User }>()
);

export const AuthsFailure = createAction(
  '[Auth]  Auths Failure',
  props<{ error: any }>()
);
