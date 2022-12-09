import { createFeatureSelector, createSelector } from '@ngrx/store';
import { DishUserState } from './dashboard.reducer';

export const selectDishUserFeatureState = createFeatureSelector<DishUserState>('dashboard');

export const selectDish = createSelector(
    selectDishUserFeatureState,
    (state: DishUserState) => state.dish
)

export const selectUser = createSelector(
    selectDishUserFeatureState,
    (state: DishUserState) => state.user
)

