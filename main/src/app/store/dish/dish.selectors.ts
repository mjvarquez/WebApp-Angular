import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Dish, DishState } from '../dish.state';

export const selectDishFeatureState = createFeatureSelector<DishState>('dishes');

export const selectDish = createSelector (
    selectDishFeatureState,
    (state: DishState) => state.dish
)