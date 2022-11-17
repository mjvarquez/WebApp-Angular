import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore'
import { AngularFireAuth } from '@angular/fire/auth'

import { User, Authentication } from '../user.state';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isSignedIn = false;

  constructor(private fireAuth: AngularFireAuth,
    private fireStore: AngularFirestore) { }

  signUp(data: Authentication) {
    console.log(data)
    this.fireAuth.createUserWithEmailAndPassword(data.email, data.password)
      .then((res) => {
        console.log(res)
        alert('Registered Successfully')
        this.fireStore.collection('users').add({
          "uid": res.user?.uid,
          "id": data.id,
          "firstName": data.firstName,
          "lastName": data.lastName,
          "email": data.email,
          "userType": data.userType
        })
      }, err => {
        console.log(err)
      })
  }

  signIn(data: Authentication) {
    this.fireAuth.signInWithEmailAndPassword(data.email, data.password)
      .then((res) => {
        console.log("logged in", res);
        alert('Login Successfully');
      }, err => {
        console.log(err)
      })
  }
}
