import { Component, OnDestroy, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { selectCurrentUser } from 'src/app/store/auth-user/auth/auth.selectors';

import { CurrentUserState, User } from 'src/app/store/user.state';
import * as authAction from '../../../store/auth-user/auth/auth.actions'

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

    getCurrentUser(){
        // this.currentUser$ = this.store.select('currentUser');
        // this.currentUser$.subscribe({
        //     next: (res: any) => {
        //         console.log(res)
        //     }
        // })
        this.store.dispatch(authAction.authLogoutRequested());
        this.currentUser$ = this.store.select(selectCurrentUser).subscribe((res: any) => {
            console.log(res.auth.user.id)
        })

        // this.subscription = this.store.select(selectCurrentUser).subscribe({
        //   next: (res) => {
        //     console.log(res)
        //   }
        // })

        // this.currentUser$ = this.store.pipe(
        //     // select(selectCurrentUser)
        //     select('currentUser')
        // ).subscribe(res => {
        //     console.log(res)
        // })
      }
    
    ngOnInit(): void {
        this.getCurrentUser();
    } 

    // ngOnDestroy(): void {
    // this.subscription.unsubscribe();
    // }
}
