import { Routes } from '@angular/router';

import { AppBlankComponent } from './adminpage/layout/blank/blank.component';
import { FullComponent } from './adminpage/layout/full/full.component';
import { HomepageComponent } from './homepage/layouts/homepage.component';

import { AuthGuard } from './auth.guard';

export const AppRoutes: Routes = [
    {
        path: '',
        component: FullComponent,
        // canActivate: [AuthGuard],
        // data: { roles: ['Admin'] },
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
                loadChildren: () => import('./adminpage/views/orders/orders.module').then(m => m.OrdersModule)
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
        path: '',
        component: HomepageComponent,
        // canActivate: [AuthGuard],
        // data: { roles: ['Admin', 'Employee'] },
        children: [
            {
                path: '',
                redirectTo: '/homepage',
                pathMatch: 'full'
            },
            {
                path: '',
                loadChildren:
                    () => import('./homepage/layouts/homepage.module').then(m => m.HomepageModule)
            }
        ]
    },
    {
        path: '**',
        redirectTo: '404'
    }
];
