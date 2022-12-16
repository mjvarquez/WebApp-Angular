import { createFeatureSelector, createSelector } from '@ngrx/store';
import { MenuForToday } from '../../dish.state';

export const selectMenuFeatureState = createFeatureSelector<MenuForToday>('menu');

export const selectMenu = createSelector(
    selectMenuFeatureState,
    (state: MenuForToday) => state.menu
)
