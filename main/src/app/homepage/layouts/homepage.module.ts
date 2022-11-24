import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatExpansionModule } from '@angular/material/expansion';

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';

import { HomepageRoutes } from './homepage.routing';
import { HomepageComponent } from './homepage.component';
import { HorizontalAppHeaderComponent } from './components/horizontal-header/horizontal-header.component';
import { AppBreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { ContentComponent } from './components/content/content.component';
import { MenuComponent } from './components/content/content-components/menu/menu.component';
import { OrderComponent } from './components/content/content-components/order/order.component';
import { SurveyComponent } from './components/content/content-components/survey/survey.component';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true,
  wheelSpeed: 2,
  wheelPropagation: true
};

@NgModule({
  declarations: [HomepageComponent,
    HorizontalAppHeaderComponent,
    AppBreadcrumbComponent,
    ContentComponent,
    MenuComponent,
    OrderComponent,
    SurveyComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(HomepageRoutes),
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatInputModule,
    MatSnackBarModule,
    MatPaginatorModule,
    MatTableModule,
    MatCardModule,
    MatButtonModule,
    MatSelectModule,
    MatRadioModule,
    MatToolbarModule,
    MatMenuModule,
    PerfectScrollbarModule,
    MatCheckboxModule,
    MatExpansionModule
  ],
  providers: [
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    },
  ]
})
export class HomepageModule { }
