import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Store } from '@ngrx/store';
import { Observable, ReplaySubject, Subject, Subscription } from 'rxjs';
import { first, takeUntil } from 'rxjs/operators';

import { OrderMenuService } from 'src/app/store/homepage/order-menu.service';
import * as surveyResultAction from '../../../../../store/dashboard/survey-result/survey-result.actions';

const newDate = new Date();
newDate.setDate(newDate.getDate() + 1);
const currentDate = newDate.toISOString().slice(0, 10);

@Component({
  selector: 'app-survey-result',
  templateUrl: './survey-result.component.html',
  styleUrls: ['./survey-result.component.scss']
})
export class SurveyResultComponent implements OnInit, OnDestroy {
  dataSource!: any;
  displayedColumns: string[] = ['surveyResult', 'totalCountedVotes'];
  surveyResult$!: Observable<any>
  // private surveyResultSubscription: ReplaySubject<boolean> = new ReplaySubject(1);
  voteResults: { [key: string]: any } = {};
  currentDate = currentDate;

  constructor(
    private orderMenuService: OrderMenuService,
    private store: Store<any>
  ) { }

  getSurveyResult() {
    // count all voted dishes
    let count: { [key: string]: any } = {};
    this.store.dispatch(surveyResultAction.loadSurveyResultsRequestedAction());
    this.surveyResult$ = this.store.select('surveyResult');
    this.surveyResult$.subscribe((res) => {
      res.voted_dishes.forEach((votedDish: any) => {
        for (const dishCount of votedDish.surveys) {
          const data = `${dishCount.dish_id}_${dishCount.dish.dish_name}`;
          (count[data] || (count[data] = { ...dishCount, count: 0 })).count += 1;
        }
        const dishSorted = Object.values(count).sort(function (a, b) { return count[a] - count[b] });
        const voteDetails = {
          dishSorted,
          survey_date: votedDish.survey_date
        };
        this.voteResults = voteDetails;
        this.voteResults.dishSorted.length = 5;
      })
      // for menu of the day
      if (this.voteResults.survey_date === this.currentDate) {
        this.dataSource = new MatTableDataSource(this.voteResults.dishSorted);
        this.setMenuForToday();
      }
    })
  }

  setMenuForToday() {
    this.voteResults.dishSorted.forEach((c: any) => {
      const survey_date = this.voteResults.survey_date
      const menuDetails: any = {
        id: c.dish.id,
        dish_name: c.dish.dish_name,
        dish_type: c.dish.dish_type,
        price: c.dish.price,
        dish_image: c.dish.dish_image,
      }
      const menuForToday = { menuDetails, survey_date }
      console.log(menuForToday)
      // this.store.dispatch(surveyResultAction.addSurveyResultsRequestedAction({ payload: menuForToday }))
    })

  }

  // setDate(date: string, e: Date) {
  //   date === 'current' ? (this.currentDate = e) : false;
  //   console.log(this.currentDate)
  // }

  ngOnInit() {
    this.getSurveyResult();
    // console.log(this.voteResults)
    // console.log(currentDate)
    // this.displaySurveyResult();
    // this.addMenu();
  }

  ngOnDestroy() {
    // this.surveyResultSubscription.next(true);
    // this.surveyResultSubscription.complete();
    // this.addMenu();
  }
}


