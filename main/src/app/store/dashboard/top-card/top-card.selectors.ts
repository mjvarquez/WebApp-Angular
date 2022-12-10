import { createFeatureSelector, createSelector } from '@ngrx/store';
import { DishUserState } from './top-card.reducer';

export const selectDishUserFeatureState = createFeatureSelector<DishUserState>('topCard');

export const selectDish = createSelector(
    selectDishUserFeatureState,
    (state: DishUserState) => state.dish
)

export const selectUser = createSelector(
    selectDishUserFeatureState,
    (state: DishUserState) => state.user
)