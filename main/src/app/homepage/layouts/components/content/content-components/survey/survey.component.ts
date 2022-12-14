import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Dish } from 'src/app/store/dish.state';
import * as surveyAction from '../../../../../../store/homepage/survey/survey.actions';

const currentDate = new Date();
currentDate.setDate(currentDate.getDate() + 1);
const tomorrowDate = currentDate.toISOString().slice(0, 10);

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.scss']
})

export class SurveyComponent implements OnInit {
  surveyedDishes!: Dish[];
  surveyedDishes$!: Observable<any>;
  activeDishes!: Dish[];
  checkedItems = new Array<string>();
  surveyForm!: FormGroup;
  panelOpenState = false;
  step = 0;
  tomorrowDate = tomorrowDate;

  constructor(
    private formBuilder: FormBuilder,
    private store: Store<{ surveyedDishes: [any] }>
  ) { }

  selectedItem(event: any, selectedDish: string) {
    if (event.checked) {
      this.checkedItems.push(selectedDish);
    } else {
      this.checkedItems = this.checkedItems.filter(c => c !== selectedDish);
    }
  }

  getSurveyForm() {
    this.surveyForm = this.formBuilder.group({
      selectedItem: [false, Validators.requiredTrue]
    })
  }

  getSurveyedDish() {
    this.store.dispatch(surveyAction.loadSurveysRequested());
    this.surveyedDishes$ = this.store.select('surveyedDishes');
    this.surveyedDishes$.subscribe({
      next: (res) => {
        const surveyedDishes = res.dish;
        const activeDish = surveyedDishes.filter((c: any) => c.status == "1");
        this.activeDishes = activeDish;
        console.log(this.activeDishes)
      }
    })
  }

  onVote() {
    const data = {
      survey_date: tomorrowDate,
      voted_dishes: this.checkedItems,
    }
    this.store.dispatch(surveyAction.addSurveysRequested({ payload: data }))
    console.log(data)
  }
  // setStep(index: number) {
  //   this.step = index;
  // }

  // nextStep() {
  //   this.step++;
  // }

  // prevStep() {
  //   this.step--;
  // }

  ngOnInit(): void {
    // const userId = localStorage.getItem('id');
    // this.userId = userId;
    this.getSurveyedDish();
    this.getSurveyForm();
    // this.checkForm = this.formBuilder.group({
    //   checkItems: this.formBuilder.array([], [Validators.required]);
    // })
    // this.orderMenuService.getUserDataId();
    // this.orderMenuService.getUserData();
  }
}
