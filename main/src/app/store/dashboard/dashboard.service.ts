import { Injectable } from '@angular/core';

import { Router } from '@angular/router';

import { AngularFirestore } from '@angular/fire/firestore'

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private router: Router,
    private fireStore: AngularFirestore) { }

  getDishData() {
    const getDishes = this.fireStore.collection('dishes').valueChanges({ idField: 'id' });
    return getDishes;
  }

  getUserData() {
    const getUsers = this.fireStore.collection('users').valueChanges({ idField: 'id' });
    return getUsers;
  }

}
