import { Routes } from '@angular/router';

import { ReportComponent } from './report.component';

export const ReportRoutes: Routes = [
    {
        path: '',
        children: [
            {
                path: 'report',
                component: ReportComponent,
                data: {
                    title: 'Report',
                    urls: [
                        { title: 'Adminpage', url: '/adminpage' },
                        { title: 'Report' }
                    ]
                }
            },
        ]
    }
];
