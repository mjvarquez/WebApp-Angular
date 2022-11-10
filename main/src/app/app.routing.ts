import { Routes } from '@angular/router';

import { FullComponent } from './adminpage/layout/full/full.component';

export const AppRoutes: Routes = [
    {
        path: '',
        component: FullComponent,
        children: [
            // {
            //     path: '',
            //     redirectTo: '/adminpage',
            //     pathMatch: 'full'
            // },
            {
                path: 'dashboard',
                redirectTo: '/adminpage/dashboard',
                pathMatch: 'full'
            },
            {
                path: 'adminpage',
                loadChildren: () => import('./adminpage/pages/dashboard/dashboard.module').then(m => m.DashboardModule)
            },
            {
                path: 'adminpage',
                loadChildren: () => import('./adminpage/pages/dishes/dishes.module').then(m => m.DishesModule)
            },
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
