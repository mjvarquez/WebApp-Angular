import { SafePropertyRead } from '@angular/compiler';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Store } from '@ngrx/store';
import { Observable, ReplaySubject, Subject, Subscription } from 'rxjs';
import { first, takeUntil } from 'rxjs/operators';

import { OrderMenuService } from 'src/app/store/homepage/order-menu.service';
import * as surveyResultAction from '../../../../../store/dashboard/survey-result/survey-result.actions';

const currentDate = new Date();
const tomorrowDate =
  currentDate.getFullYear() +
  "-" +
  (currentDate.getMonth() + 1) +
  "-" +
  (currentDate.getDate() + 1);

@Component({
  selector: 'app-survey-result',
  templateUrl: './survey-result.component.html',
  styleUrls: ['./survey-result.component.scss']
})
export class SurveyResultComponent implements OnInit, OnDestroy {
  dataSource!: any;
  displayedColumns: string[] = ['surveyResult', 'totalCountedVotes'];
  surveyResult$!: Observable<any>
  voteResults: any = [];
  tomorrowDate = tomorrowDate;

  constructor(
    private store: Store<any>
  ) { }

  getSurveyResult() {
    // count all voted dishes
    let count: { [key: string]: any } = {};
    this.store.dispatch(surveyResultAction.loadSurveyResultsRequestedAction());
    this.surveyResult$ = this.store.select('surveyResult');
    this.surveyResult$.subscribe((res) => {
      res.voted_dishes.forEach((votedDish: any) => {

        for (let dishCount of votedDish.surveys) {
          const data = `${dishCount.dish.id}_${dishCount.dish.dish_name}`;
          (count[data] || (count[data] = { ...dishCount, count: 0 })).count += 1;
        }
        const dishSorted = Object.values(count).sort(function (a, b) { return count[b] - count[a] });
        const voteDetails = {
          dishSorted,
          survey_date: votedDish.survey_date
        };
        // survey result
        if (voteDetails.survey_date === this.tomorrowDate && voteDetails.dishSorted.length >= 5) {
          const surveyedItems = [];
          for (const value of voteDetails.dishSorted) {
            surveyedItems.push(value)
            if (surveyedItems.length === 5) {
              break;
            }
          }
          this.voteResults = surveyedItems;
          this.dataSource = new MatTableDataSource(this.voteResults);
        }
      })
    })
  }

  ngOnInit() {
    this.getSurveyResult();
  }

  ngOnDestroy() {
    // this.surveyResultSubscription.next(true);
    // this.surveyResultSubscription.complete();
    // this.addMenu();
  }
}


