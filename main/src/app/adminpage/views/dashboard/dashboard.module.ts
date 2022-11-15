
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DemoMaterialModule } from '../../../demo-material-module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DashboardRoutes } from './dashboard.routing';
import { ChartistModule } from 'ng-chartist';
import { ChartsModule } from 'ng2-charts';
import { NgApexchartsModule } from 'ng-apexcharts';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { DashboardComponent } from './dashboard.component';

import {
    TopCardComponent,
    VisitorComponent,
    Visitor2Component,
    TopCard2Component,
} from './dashboard-components';


@NgModule({
    imports: [
        CommonModule,
        DemoMaterialModule,
        FlexLayoutModule,
        ChartistModule,
        ChartsModule,
        NgApexchartsModule,
        RouterModule.forChild(DashboardRoutes),
        FormsModule,
        ReactiveFormsModule
    ],
    declarations: [
        DashboardComponent,
        TopCardComponent,
        VisitorComponent,
        Visitor2Component,

        TopCard2Component,
    ],
})
export class DashboardModule { }
