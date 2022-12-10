import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';

import * as topCardAction from '../../../../../store/dashboard/top-card/top-card.actions';

@Component({
  selector: 'app-top-card',
  templateUrl: './top-card.component.html',
  styleUrls: ['./top-card.component.scss']
})
export class TopCardComponent implements OnInit {
  dishes$!: Observable<any>;
  users$!: Observable<any>;
  dishesSubscription!: Subscription;
  usersSubscription!: Subscription;

  totalCount = {
    allDish: 0,
    activeDish: 0,
    inactiveDish: 0,
    allUser: 0
  }
  totalDish = { count: 0 };
  activeDish = { count: 0 };
  inactiveDish = { count: 0 };
  totalUser = { count: 0 };

  constructor(private store: Store<any>) { }

  getTotalDishes() {
    this.store.dispatch(topCardAction.fetchDishesRequestedAction());
    this.dishes$ = this.store.select('topCard');
    this.dishesSubscription = this.dishes$.subscribe((res) => {
      const dishes = res.dish;
      const totalActiveDish = dishes.filter((c: any) => c.status == "1");
      const totalInactiveDish = dishes.filter((c: any) => c.status == "0");
      this.totalDish.count = dishes.length;
      this.activeDish.count = totalActiveDish.length;
      this.inactiveDish.count = totalInactiveDish.length;
    })
  }

  getTotalusers() {
    this.store.dispatch(topCardAction.fetchUsersRequestedAction());
    this.users$ = this.store.select('topCard');
    this.usersSubscription = this.users$.subscribe((res) => {
      const users = res.user;
      this.totalUser.count = users.length;
    })
  }

  setCount() {
    let totalDishCountStop = setInterval(() => {
      this.totalCount.allDish++;
      if (this.totalCount.allDish == this.totalDish.count) {
        clearInterval(totalDishCountStop);
      }
    }, 150)
    let activeDishCountStop = setInterval(() => {
      this.totalCount.activeDish++;
      if (this.totalCount.activeDish == this.activeDish.count) {
        clearInterval(activeDishCountStop);
      }
    }, 300)
    let inactiveDishCountStop = setInterval(() => {
      this.totalCount.inactiveDish++;
      if (this.totalCount.inactiveDish == this.inactiveDish.count) {
        clearInterval(inactiveDishCountStop);
      }
    }, 300)
    let totalUserCountStop = setInterval(() => {
      this.totalCount.allUser++;
      if (this.totalCount.allUser == this.totalUser.count) {
        clearInterval(totalUserCountStop);
      }
    }, 150)
  }

  ngOnInit(): void {
    this.getTotalDishes();
    this.getTotalusers();
    this.setCount();
  }

  ngOnDestroy(): void {
    this.dishesSubscription.unsubscribe();
    this.usersSubscription.unsubscribe();
  }
}
