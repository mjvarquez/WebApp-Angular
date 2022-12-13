import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';

import { OrderMenuService } from 'src/app/store/homepage/order-menu.service';
import * as surveyResultAction from '../../../../../store/dashboard/survey-result/survey-result.actions';

@Component({
  selector: 'app-survey-result',
  templateUrl: './survey-result.component.html',
  styleUrls: ['./survey-result.component.scss']
})
export class SurveyResultComponent implements OnInit, OnDestroy {
  dataSource!: any;
  displayedColumns: string[] = ['surveyResult'];
  surveyResult$!: Observable<any>
  surveyResultSubscription!: Subscription;
  voteResults: any;

  constructor(
    private orderMenuService: OrderMenuService,
    private store: Store<any>) { }

  getSurveyResult() {
    let count: { [key: string]: any } = {};
    this.store.dispatch(surveyResultAction.loadSurveyResultsRequestedAction());
    this.surveyResult$ = this.store.select('surveyResult');
    this.surveyResultSubscription = this.surveyResult$.subscribe((res) => {
      res.voted_dishes.forEach((votedDish: any) => {
        for (const dishCount of votedDish.surveys) {
          const data = `${dishCount.dish.id}_${dishCount.dish.dish_name}`;
          (count[data] || (count[data] = { ...dishCount, count: 0 })).count += 1;

        }
        const dishSorted = Object.values(count).sort(function (a, b) { return count[b] - count[a] });
        // dishSorted.length = 5;
        this.voteResults = dishSorted;
      })
      console.log(this.voteResults)
      this.dataSource = new MatTableDataSource(this.voteResults);
    })
    // for menu of the day

    // this.orderMenuService.addMenuForToday(selectedMenu)
    // console.log(this.menuForToday)
    //   })
    // })
    //   }
    // })
  }

  // addMenu(){
  //   this.orderMenuService.addMenuForToday(this.menuForToday);
  // }

  ngOnInit(): void {
    this.getSurveyResult();
    // this.addMenu();
  }

  ngOnDestroy(): void {
    this.surveyResultSubscription.unsubscribe();
    // this.addMenu();
  }
}


