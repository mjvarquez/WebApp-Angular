import { Routes } from '@angular/router';

import { DishesComponent } from './dishes.component';

export const DishesRoutes: Routes = [
    {
        path: '',
        children: [
            {
                path: 'dishes',
                component: DishesComponent,
                data: {
                    title: 'Dishes',
                    urls: [
                        { title: 'Adminpage', url: '/adminpage' },
                        { title: 'Dishes' }
                    ]
                }
            },
        ]
    }
];