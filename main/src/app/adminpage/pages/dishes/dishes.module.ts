import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { DishesRoutes } from './dishes.routing';
import { DishesComponent } from './dishes.component';


@NgModule({
  declarations: [DishesComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(DishesRoutes),
  ]
})
export class DishesModule { }
