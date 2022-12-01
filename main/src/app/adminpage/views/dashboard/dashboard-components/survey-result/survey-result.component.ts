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

  constructor(private orderMenuService: OrderMenuService) { }

  getSurveyResult(){
    // let dishVotes: Map<string, any> = new Map<string, any>();
    // let votedDishDetails: Map<string, VotedDishDetails> = new Map<string, VotedDishDetails>();
    let dishCounts: any[] = [];
    this.orderMenuService.getSurveyData().subscribe({
      next: (res) => {
        res.forEach((dish: any) => {
          const date = {
            date_served: dish.date_served,
          }
          // for dish survey result
          let count: { [key: string ]: any } = {};
          dish.dishes.forEach((dishes: any) => {
            const dishDetails = {
              date,
              dishName: dishes.dishName,
              dishType: dishes.dishType,
              price: dishes.price
            }
            // console.log(dishDetails)
            dishCounts.push(dishDetails)
            // for(const dishCount of dishCounts){
            //   const data = `${dishCount.date_served}_${dishCount.dishName}_${dishCount.dishType}_${dishCount.price}`;
            //   (count[data] || (count[data] = {...dishCount, count: 0})).count += 1;
            // }
            // const result = Object.values(count);
            // result.length = 5;
            // const dishSorted = Object.values(result).sort(function(a,b){return count[b] - count[a]});
 
            dishCounts.forEach((c: any) => {
              count[c.dishName] = (count[c.dishName] || 0 ) + 1 
            });
            console.log(count)
            let dishSorted = Object.keys(count).sort(function(a,b){return count[b] - count[a]});
            dishSorted.length = 5;
            // console.log(dishSorted)
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


