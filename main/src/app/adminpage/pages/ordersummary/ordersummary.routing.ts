import { Routes } from '@angular/router';

import { OrdersummaryComponent } from './ordersummary.component';

export const OrdersummaryRoutes: Routes = [
    {
        path: '',
        children: [
            {
                path: 'ordersummary',
                component: OrdersummaryComponent,
                data: {
                    title: 'Order Summary',
                    urls: [
                        { title: 'Adminpage', url: '/adminpage' },
                        { title: 'Order Summary' }
                    ]
                }
            },
        ]
    }
];
