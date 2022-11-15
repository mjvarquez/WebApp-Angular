import { Routes } from '@angular/router';

import { DashboardComponent } from './dashboard.component';

export const DashboardRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent,
        data: {
          title: 'Dashboard',
          urls: [
            { title: 'Adminpage', url: '/adminpage' },
            { title: 'Dashboard' }
          ]
        }
      },
    ]
  }
];
