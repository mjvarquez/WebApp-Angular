import { Injectable } from '@angular/core';

import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class OrderMenuService {

  constructor(private fireStore: AngularFirestore) { }

  getData() {
    const getData = this.fireStore.collection('dishes').valueChanges({ idField: 'id' })
    return getData;
  }
}
