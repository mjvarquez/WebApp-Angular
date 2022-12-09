import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';

import { User } from 'src/app/store/user.state';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
    subscription!: Subscription;
    currentUser$!: any;
    currentUser!: User[];

    constructor(private store: Store<any>) { }

    // getCurrentUser() {
    //     this.currentUser$ = this.store.select('auth');
    //     this.currentUser$.subscribe({
    //         next: (res: any) => {
    //             console.log(res)
    //         }
    //     })
    // }

    ngOnInit(): void {
        // this.getCurrentUser();
    }

    // ngOnDestroy(): void {
    // this.subscription.unsubscribe();
    // }
}
