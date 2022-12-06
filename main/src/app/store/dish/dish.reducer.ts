import { ComponentFactoryResolver } from '@angular/core';
import { createReducer, on } from '@ngrx/store';

import { DishState } from '../dish.state';
import * as dishAction from './dish.actions';

export const initialState: DishState = {
  dish: [],
};

export const DishReducer = createReducer(
  initialState,
  on(dishAction.loadDishesSucceeded, (state: DishState, { payload }) => {
      return {
        ...state,
        dish: payload
      }
  }),
  on(dishAction.addDishesSucceeded, (state: DishState, { payload }) => {
    const data = {
      dish_name: payload.dish_name,
      dish_type: payload.dish_type,
      price: payload.price,
      status: payload.status
    }
    return { ...state, dish: [...state.dish, data]}
  }),
  on(dishAction.deleteDishesSucceeded, (state: DishState, { id }) => {
    let getData = state.dish;
    let newData = getData.filter(item => item.id !== id);
    return { ...state, dish: newData}
  }),
  on(dishAction.updateDishesSucceeded, (state: DishState, { payload }) => {
    let updateDish = state.dish.map((dish) => {
      return payload.id === dish.id ? payload : dish;
    })
    return { ...state, dish: updateDish }
  })
  
);

