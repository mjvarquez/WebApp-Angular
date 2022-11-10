import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ReportComponent } from './report.component';
import { ReportRoutes } from './report.routing';

@NgModule({
  declarations: [ReportComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(ReportRoutes)
  ]
})
export class ReportModule { }
