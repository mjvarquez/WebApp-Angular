import { Routes } from '@angular/router';

import { UsersComponent } from './users.component';

export const UsersRoutes: Routes = [
    {
        path: '',
        children: [
            {
                path: 'users',
                component: UsersComponent,
                data: {
                    title: 'Users',
                    urls: [
                        { title: 'Adminpage', url: '/adminpage' },
                        { title: 'Users' }
                    ]
                }
            },
        ]
    }
];
