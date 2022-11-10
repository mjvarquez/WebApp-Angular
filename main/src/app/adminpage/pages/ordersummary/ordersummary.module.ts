import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { OrdersummaryComponent } from './ordersummary.component';
import { OrdersummaryRoutes } from './ordersummary.routing';

@NgModule({
  declarations: [OrdersummaryComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(OrdersummaryRoutes)
  ]
})
export class OrdersummaryModule { }
