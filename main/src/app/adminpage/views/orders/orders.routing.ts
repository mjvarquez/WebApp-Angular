import { Routes } from '@angular/router';

import { OrdersComponent } from './orders.component';

export const OrdersRoutes: Routes = [
    {
        path: '',
        children: [
            {
                path: 'orders',
                component: OrdersComponent,
                data: {
                    title: 'Orders',
                    urls: [
                        { title: 'Adminpage', url: '/adminpage' },
                        { title: 'Orders ' }
                    ]
                }
            },
        ]
    }
];
