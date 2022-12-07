import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CurrentUserState } from '../../user.state';

// export const selectCurrentUserFeatureState = createFeatureSelector<CurrentUserState>('currentUser');

// export const selectCurrentUser = createSelector(
//     selectCurrentUserFeatureState,
//     // (state: CurrentUserState) => state
//     (state: CurrentUserState) => {
//         console.log('CurrentUserState', state)
//         return state;
//     }
// )

export const selectFeature = (state: CurrentUserState) => state;

export const selectCurrentUser = createSelector(
    selectFeature,
    (state: CurrentUserState) => state

)
