import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FlexLayoutModule } from '@angular/flex-layout';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

import { ReportComponent } from './report.component';
import { ReportRoutes } from './report.routing';

@NgModule({
  declarations: [ReportComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(ReportRoutes),
    FlexLayoutModule,
    MatIconModule,
    MatInputModule,
    MatPaginatorModule,
    MatTableModule,
    MatCardModule,
    MatButtonModule,
  ]
})
export class ReportModule { }
