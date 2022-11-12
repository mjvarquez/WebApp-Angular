import { Routes } from '@angular/router';

import { AppBlankComponent } from './adminpage/layout/blank/blank.component';
import { FullComponent } from './adminpage/layout/full/full.component';

export const AppRoutes: Routes = [
    {
        path: '',
        component: FullComponent,
        children: [
            {
                path: '',
                redirectTo: '/dashboard',
                pathMatch: 'full'
            },
            {
                path: '',
                loadChildren: () => import('./adminpage/views/dashboard/dashboard.module').then(m => m.DashboardModule),
            },
            {
                path: '',
                loadChildren: () => import('./adminpage/views/dishes/dishes.module').then(m => m.DishesModule)
            },
            {
                path: '',
                loadChildren: () => import('./adminpage/views/users/users.module').then(m => m.UsersModule)
            },
            {
                path: '',
                loadChildren: () => import('./adminpage/views/ordersummary/ordersummary.module').then(m => m.OrdersummaryModule)
            },
            {
                path: '',
                loadChildren: () => import('./adminpage/views/report/report.module').then(m => m.ReportModule)
            }
        ]
    },
    {
        path: '',
        component: AppBlankComponent,
        children: [
            {
                path: '',
                loadChildren:
                    () => import('./authentication/authentication.module').then(m => m.AuthenticationModule)
            }
        ]
    },
    {
        path: '**',
        redirectTo: '404'
    }
];
