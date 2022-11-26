import { Injectable } from '@angular/core';

import { AngularFirestore } from '@angular/fire/firestore';
import { Dish } from '../dish.state';

@Injectable({
  providedIn: 'root'
})
export class OrderMenuService {
  // voted = false;
  // getUserId = localStorage.getItem('id'); 

  constructor(private fireStore: AngularFirestore) { }

  getDishData() {
    return this.fireStore.collection('dishes').valueChanges({ idField: 'id' });
  }

  // getUserDataId(){
  //   return this.fireStore.collection('users').ref.onSnapshot(snap => {
  //     snap.forEach((userId: any) => {
  //       console.log(userId.id)
  //     })
  //   })
  // }

  // getDishData() {
  //   const dishData = this.fireStore.collection('dishes').valueChanges({ idField: 'id' });
  //   dishData.subscribe((ref) => {
  //     const data = ref;
  //     data.forEach((dish: any) => {
  //       this.dishData = dish.id;
  //       console.log(this.dishData)
  //     })
  //   })
  //   return dishData;
  // }

  // getUserData(){
  //   const userData = this.fireStore.collection('users').valueChanges({ idField: 'id'});
  //   userData.subscribe((ref) => {
  //     const data = ref;
  //     data.forEach((user: any) => {
  //       this.userData = user.id;
  //       console.log(this.userData);
  //     })
  //   })
  //   return userData;
  // }

  addData(userId:any, dateServed: any, data: any){
    const votedDishes = {
      dateServed,
      userId,
      dishes: {data}
    }
    this.fireStore.collection('voted_dishes').add(votedDishes)
    .then(res => {
      if(res){
        alert("Voted Successfully")
      }
    }).catch(err => {

    })
    console.log(votedDishes)
  } 
}
