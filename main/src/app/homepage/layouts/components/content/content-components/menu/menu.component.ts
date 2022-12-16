import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, ReplaySubject, Subject, Subscription } from 'rxjs';

import * as menuResultAction from '../../../../../../store/homepage/menu/menu.actions';

const newDate = new Date();
newDate.setDate(newDate.getDate() + 1);
const currentDate = newDate.toISOString().slice(0, 10);

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  menuResult$!: Observable<any>
  voteResults: { [key: string]: any } = {};
  currentDate = currentDate;

  constructor(
    private store: Store<any>
  ) { }

  getmenuResult() {
    // count all voted dishes
    let count: { [key: string]: any } = {};
    this.store.dispatch(menuResultAction.loadMenusRequestedAction());
    this.menuResult$ = this.store.select('menu');
    this.menuResult$.subscribe((res) => {
      res.menu.forEach((dishes: any) => {
        for (let dishCount of dishes.surveys) {
          const data = `${dishCount.dish.id}_${dishCount.dish.dish_name}`;
          (count[data] || (count[data] = { ...dishCount, count: 0 })).count += 1;
        }

        const dishSorted = Object.values(count).sort(function (a, b) { return count[b] - count[a] });
        const voteDetails = {
          dishSorted,
          survey_date: dishes.survey_date
        };
        this.voteResults = voteDetails;
        this.voteResults.dishSorted.length = 5;
        console.log(this.voteResults)
      })
    })
  }

  ngOnInit(): void {
    this.getmenuResult();
  }

}
