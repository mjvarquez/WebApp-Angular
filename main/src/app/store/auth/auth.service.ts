import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore'
import { AngularFireAuth } from '@angular/fire/auth'

import { User, Authentication } from '../user.state';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isSignedIn = false;
  date = new Date().toLocaleString()
  userRef: any;

  constructor(private fireAuth: AngularFireAuth,
    private fireStore: AngularFirestore,
    private router: Router) { }

  signUp(data: Authentication) {


    this.fireAuth.createUserWithEmailAndPassword(data.email, data.password)
      .then((res) => {
        console.log(res)
        alert('Registered Successfully')
        this.fireStore.collection('users').add({
          "uid": res.user?.uid,
          "firstName": data.firstName,
          "lastName": data.lastName,
          "email": data.email,
          "role": data.role,
          "created_at": this.date,
          "updated_at": ''
          // "status": 'active' || 'inactive',
        })
      }, err => {
        console.log(err)
      })
  }

  signIn(data: Authentication) {
    this.fireAuth.signInWithEmailAndPassword(data.email, data.password)
      .then((res) => {
        console.log("logged in", res);
        this.fireStore.collection('users').ref.where("email", "==", res.user?.email).onSnapshot(snap => {
          snap.forEach((userRef: any) => {
            console.log('userRef', userRef.data())
            if (userRef.data().role === "Admin") {
              this.router.navigate(['/dashboard'])
            } else {
              this.router.navigate(['/homepage'])
            }
          })
        })
        alert('Login Successfully');
      }, err => {
        console.log(err)
      })
  }
}
