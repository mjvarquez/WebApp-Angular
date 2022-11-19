import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

import { OrdersRoutes } from './orders.routing';
import { OrdersComponent } from './orders.component';

@NgModule({
  declarations: [OrdersComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(OrdersRoutes),
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatInputModule,
    MatPaginatorModule,
    MatTableModule,
    MatCardModule,
    MatButtonModule,
  ]
})
export class OrdersModule { }