import { createFeatureSelector, createSelector } from '@ngrx/store';
import { VotedDishes } from '../../dish.state';

export const selectSurveyResultFeatureState = createFeatureSelector<VotedDishes>('surveyResult');

export const selectSurveyResult = createSelector(
    selectSurveyResultFeatureState,
    (state: VotedDishes) => state.voted_dishes
)