import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CurrentUserState } from '../../user.state';

export const selectCurrentUserFeatureState = createFeatureSelector<CurrentUserState>('auth');

export const selectCurrentUser = createSelector(
    selectCurrentUserFeatureState,
    (state: CurrentUserState) => state
)

// export const selectFeature = (state: CurrentUserState) => state;

// export const selectCurrentUser = createSelector(
//     selectFeature,
//     (state: CurrentUserState) => state

// )
