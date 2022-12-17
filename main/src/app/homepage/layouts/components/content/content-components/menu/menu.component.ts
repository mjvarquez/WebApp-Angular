import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, ReplaySubject, Subject, Subscription } from 'rxjs';

import * as menuResultAction from '../../../../../../store/homepage/menu/menu.actions';
import { ContentService } from '../../content.service';

const newDate = new Date();
const currentDate =
  newDate.getFullYear() +
  "-" +
  (newDate.getMonth() + 1) +
  "-" +
  (newDate.getDate());

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  menuResult$!: Observable<any>
  voteResults: any = [];
  currentDate = currentDate;
  checkedItems: any = [];
  orderMenu: Subject<any[]> = new Subject();

  constructor(
    private store: Store<any>,
    private contentService: ContentService
  ) { }

  getmenuResult() {
    // count all voted dishes to display in menu for today
    let count: { [key: string]: any } = {};
    this.store.dispatch(menuResultAction.loadMenusRequestedAction());
    this.menuResult$ = this.store.select('menu');
    this.menuResult$.subscribe((res: any) => {
      res.menu.forEach((dishes: any) => {
        for (let dishCount of dishes.surveys) {
          const data = `${dishCount.dish.id}_${dishCount.dish.dish_name}`;
          (count[data] || (count[data] = { ...dishCount, count: 0 })).count += 1;
        }
        const dishSorted = Object.values(count).sort(function (a, b) { return count[b] - count[a] });
        const voteDetails: any = {
          dishSorted,
          survey_date: dishes.survey_date
        };
        if (voteDetails.survey_date === this.currentDate && voteDetails.dishSorted.length >= 5) {
          const items = [];
          for (const value of voteDetails.dishSorted) {
            items.push(value)
            if (items.length === 5)
              break;
          }
          this.voteResults = items;
        }
      })
    })
  }

  selectedItem(event: any, selectedDish: string) {
    if (event.currentTarget.checked) {
      this.checkedItems.push(selectedDish);
      this.contentService.orderMenu.next(this.checkedItems)
    } else {
      this.checkedItems = this.checkedItems.filter((c: any) => c !== selectedDish);
      this.contentService.orderMenu.next(this.checkedItems)
    }
  }

  // selectedOrderItem() {
  //   this.orderedItem.emit(this.checkedItems)
  // }

  ngOnInit(): void {
    this.getmenuResult();
  }

}
