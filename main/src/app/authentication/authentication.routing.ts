import { Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { ErrorComponent } from './error/error.component';
import { ForgotComponent } from './forgot/forgot.component';

export const AuthenticationRoutes: Routes = [
    {
        path: '',
        children: [
            {
                path: '404',
                component: ErrorComponent
            },
            {
                path: 'login',
                component: LoginComponent
            },
            {
                path: 'error',
                component: ForgotComponent
            },
        ]
    }
];
