import { Injectable } from '@angular/core';

import { VotedDishes, MenuForToday } from '../dish.state';

@Injectable({
  providedIn: 'root'
})
export class OrderMenuService {

  constructor() { }

  // getDishData() {
  //   return this.fireStore.collection('dishes').valueChanges({ idField: 'id' });
  // }

  // getSurveyData(){
  //   return this.fireStore.collection('voted_dishes').valueChanges();
  // }

  // addData(data: VotedDishes){
  //   const votedDishes = {
  //     "date_served": data.date_served,
  //     "user_id": data.user_id,
  //     "dishes": data.dishes 
  //   }
  //   this.fireStore.collection('voted_dishes').add(votedDishes)
  //   .then(res => {
  //     if(res){
  //       alert("Voted Successfully")
  //     }
  //   }).catch(err => {

  //   })
  //   console.log(votedDishes)
  // } 

  // addMenuForToday(data: MenuForToday){
  //   const menuForToday = {
  //     "menu": data.menu,
  //     "date_served": data.date_served
  //   }
  //   this.fireStore.collection('menu_for_today').add(menuForToday)
  // }
}
