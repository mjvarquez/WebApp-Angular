import { Routes } from '@angular/router';

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
                loadChildren: () => import('./adminpage/pages/dashboard/dashboard.module').then(m => m.DashboardModule)
            },
            {
                path: '',
                loadChildren: () => import('./adminpage/pages/dishes/dishes.module').then(m => m.DishesModule)
            },
            {
                path: '',
                loadChildren: () => import('./adminpage/pages/users/users.module').then(m => m.UsersModule)
            },
            {
                path: '',
                loadChildren: () => import('./adminpage/pages/ordersummary/ordersummary.module').then(m => m.OrdersummaryModule)
            },
            {
                path: '',
                loadChildren: () => import('./adminpage/pages/report/report.module').then(m => m.ReportModule)
            }
        ]
    },
    // {
    //     path: '',
    //     component: AppBlankComponent,
    //     children: [
    //         {
    //             path: 'authentication',
    //             loadChildren:
    //                 () => import('./authentication/authentication.module').then(m => m.AuthenticationModule)
    //         }
    //     ]
    // },
    {
        path: '**',
        redirectTo: 'authentication/404'
    }
];
