import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { AngularFirestore, AngularFirestoreCollection, } from '@angular/fire/firestore';

import { User } from '../user.state';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users: Observable<User[]> | undefined;

  constructor(private fireStore: AngularFirestore) { }

  getData() {
    return this.fireStore.collection('users').valueChanges({ idField: 'id' })
  }

}