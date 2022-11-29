import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { VotedDishes } from 'src/app/store/dish.state';

import { OrderMenuService } from 'src/app/store/homepage/order-menu.service';

@Component({
  selector: 'app-survey-result',
  templateUrl: './survey-result.component.html',
  styleUrls: ['./survey-result.component.scss']
})
export class SurveyResultComponent implements OnInit {
  dataSource!: any;
  displayedColumns = ['surveyResult']
  // dish_id!: any;

  constructor(private orderMenuService: OrderMenuService,
    private fireStore: AngularFirestore) { }

  getSurveyResult(){
    let dishVotes: Map<string, string> =  new Map<string, string>()
    let arr: string[] = [];
    let counts = {};
    this.orderMenuService.getSurveyData().subscribe({
      next: (res) => {
        //dish iteration
        res.forEach((dish: any) => {
          let counts = {};
          dish.dishes.forEach((dishes: any) => {
            const dishCount = dishVotes.get(dishes.dishName) == null ?0:dishVotes.get(dishes.dishName)
            dishVotes.set(dishes.dishName, (Number(dishCount)+1).toString())
          })
        })
        console.table(dishVotes)
      }
    })
  }

  ngOnInit(): void {
    this.getSurveyResult();
  }
}
