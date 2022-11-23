import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { AngularFirestore } from '@angular/fire/firestore'

import { Dish } from '../dish.state';

@Injectable({
  providedIn: 'root'
})
export class DishService {
  date = new Date().toLocaleString();

  constructor(private fireStore: AngularFirestore,
    private router: Router) { }

  getData() {
    const getData = this.fireStore.collection('dishes').valueChanges({ idField: 'id' });
    return getData;
  }

  addData(data: Dish) {
    const dishDetails = {
      "dishName": data.dishName,
      "dishType": data.dishType,
      "price": data.price,
      "status": data.status,
      "created_at": this.date,
      "updated_at": '',
    }
    this.fireStore.collection('dishes').add(dishDetails)
    if (dishDetails) {
      alert('Registered Dish Successfully')
    }
  }

  updateData(id: string, data: any) {
    const updateData = this.fireStore.collection('dishes').doc(id).update(data)
  }

  deleteData(id: string) {
    const deleteData = this.fireStore.collection('dishes').doc(id).delete();
    return deleteData;
  }
}
