import { createFeatureSelector, createSelector } from '@ngrx/store';
import { DishState } from '../../dish.state';

export const selectDishSurveyFeatureState = createFeatureSelector<DishState>('surveyedDishes');

export const selectDishSurvey = createSelector (
    selectDishSurveyFeatureState,
    (state: DishState) => state.dish
)