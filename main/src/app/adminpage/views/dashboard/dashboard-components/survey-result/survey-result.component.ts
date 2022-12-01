import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

import { OrderMenuService } from 'src/app/store/homepage/order-menu.service';

@Component({
  selector: 'app-survey-result',
  templateUrl: './survey-result.component.html',
  styleUrls: ['./survey-result.component.scss']
})
export class SurveyResultComponent implements OnInit {
  dataSource!: any;
  displayedColumns: string[] = ['surveyResult'];
  dateServed = new Date().toISOString().slice(0, 10);

  constructor(private orderMenuService: OrderMenuService) { }

  getSurveyResult(){
    // let dishVotes: Map<string, any> = new Map<string, any>();
    // let votedDishDetails: Map<string, VotedDishDetails> = new Map<string, VotedDishDetails>();
    let dishCount: any[] = [];
    this.orderMenuService.getSurveyData().subscribe({
      next: (res) => {
        res.forEach((dish: any) => {
          // for dish survey result
          let count: { [key: string ]: any } = {};
          // let count: any[]
          dish.dishes.forEach((dishes: any) => {
            const dishDetails = {
              dishName: dishes.dishName,
              dishType: dishes.dishType,
              price: dishes.price
            }
            dishCount.push(dishDetails.dishName)
            // console.log(dishCount)
            dishCount.forEach((c: any) => {
              count[c] = (count[c] || 0 ) + 1 
            });
            // console.log(count)
            let dishSorted = Object.keys(count).sort(function(a,b){return count[b] - count[a]});
            dishSorted.length = 5;
            this.dataSource = new MatTableDataSource(dishSorted);
            // for menu of the day
            
            // this.orderMenuService.addMenuForToday(selectedMenu)
            // console.log(this.menuForToday)
            
          })
        })
      }
    })
  } 
  
  // addMenu(){
  //   this.orderMenuService.addMenuForToday(this.menuForToday);
  // }

  ngOnInit(): void {
    this.getSurveyResult();
    // this.addMenu();
  }
}


