import { Injectable } from '@angular/core';


import { Dish } from '../dish.state';

@Injectable({
  providedIn: 'root'
})
export class DishService {
  date = new Date().toLocaleString();

  constructor() { }

  // getData() {
  //   return this.fireStore.collection('dishes').valueChanges({ idField: 'id' });
  // }

  // addData(data: Dish) {
  //   const dishDetails = {
  //     "dishName": data.dishName,
  //     "dishType": data.dishType,
  //     "price": data.price,
  //     // "id": data.id,
  //     "status": data.status,
  //     "created_at": this.date,
  //     "updated_at": '',
  //   }
  //   this.fireStore.collection('dishes').add(dishDetails)
  //   if (dishDetails) {
  //     alert('Registered Dish Successfully')
  //   }
  // }

  // updateData(id: string, data: any) {
  //   return this.fireStore.collection('dishes').doc(id).update(data);
  // }

  // deleteData(id: string) {
  //   return this.fireStore.collection('dishes').doc(id).delete();
  // }
}
