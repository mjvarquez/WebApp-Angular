import { Injectable } from '@angular/core';

import { AngularFirestore } from '@angular/fire/firestore';
import { Dish } from '../dish.state';

@Injectable({
  providedIn: 'root'
})
export class OrderMenuService {

  constructor(private fireStore: AngularFirestore) { }

  getData() {
    return this.fireStore.collection('dishes').valueChanges({ idField: 'id' });
  }

  addData(data: any){
    this.fireStore.collection('voted_dishes').add({data: data});
  }
}
