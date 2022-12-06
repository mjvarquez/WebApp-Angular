import { createAction, props } from '@ngrx/store';

import { Dish } from '../dish.state';
// Fetching data
export const loadDishesRequested = createAction(
  '[Dish] Load Dishes Requested'
);

export const loadDishesSucceeded = createAction(
  '[Dish] Load Dishes Succeeded',
  props<{ payload: Dish[] }>()
);
// Adding data
export const addDishesRequested = createAction(
  '[Dish] Add Dishes Requested',
  props<{ payload: Dish }>()
);

export const addDishesSucceeded = createAction(
  '[Dish] Add Dishes Succeeded',
  props<{ payload: Dish }>()
);
// Deleting data
export const deleteDishesRequested = createAction(
  '[Dish] Delete Dishes Requested',
  props<{ id: number }>()
);

export const deleteDishesSucceeded = createAction(
  '[Dish] Delete Dishes Succeeded',
  props<{ id: number}>()
);
// Updating data
export const updateDishesRequested = createAction(
  '[Dish] Update Dishes Requested',
  props<{ payload: {dishId: number, updateDish: Dish} }>()
);

export const updateDishesSucceeded = createAction(
  '[Dish] Update Dishes Success',
  props<{ payload: Dish}>()
);

export const DishesFailure = createAction(
  '[Dish] Dishes Failure',
  props<{ error: any }>()
);
