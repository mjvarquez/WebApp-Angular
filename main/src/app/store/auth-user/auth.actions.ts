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
// Adding data
export const addUsersRequested = createAction(
  '[Auth] Add Users Requested',
  props<{ payload: User }>()
);
export const addUsersSucceeded = createAction(
  '[Auth] Add Users Succeeded',
  props<{ payload: User }>()
);
// Deleting data
export const deleteUsersRequested = createAction(
  '[Auth] Delete Users Requested',
  props<{ id: number }>()
);
export const deleteUsersSucceeded = createAction(
  '[Auth] Delete Users Succeeded',
  props<{ id: number }>()
);
// Updating data
export const updateUsersRequested = createAction(
  '[Auth] Update Users Requested',
  props<{ payload: { userId: number, updateUser: User }}>()
);
export const updateUsersSucceeded = createAction(
  '[Auth] Update Users Succeeded',
  props<{ payload: User }>()
);
// Error Handling
export const AuthsFailure = createAction(
  '[Auth]  Auths Failure',
  props<{ error: any }>()
);
