import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UserState } from '../user.state';

export const selectUsersFeatureState = createFeatureSelector<UserState>('users');

export const selectArticles2 = createSelector(
    selectUsersFeatureState,
    (state: UserState) => state.user
)