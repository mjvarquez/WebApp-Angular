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
  currentRole: any;
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
          "id": data.id,
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
        console.log("logged in", res.user!.uid);
        localStorage.setItem("uid", res.user!.uid);
        this.fireStore.collection('users').ref.where("email", "==", res.user?.email).onSnapshot(snap => {
          snap.forEach((userRef: any) => {
            this.isSignedIn = true;
            localStorage.setItem("state", "true")
            localStorage.setItem("role", userRef.data().role)
            // this.currentRole = userRef.data().role;
            console.log(this.currentRole)
            console.log('userRef', userRef.data())
            if (userRef.data().role === "Admin" && localStorage.getItem('uid') != null && userRef.data().uid === res.user?.uid) {
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

  isLoggedIn() {
    const loggedIn = localStorage.getItem("state");
    if (loggedIn == 'true') {
      this.isSignedIn = true;
    } else {
      this.isSignedIn = false;
    }
    return this.isSignedIn;
  }

  getRole() {
    this.currentRole = localStorage.getItem('role');
    return this.currentRole;
  }

  signOut() {
    this.fireAuth.signOut();
    localStorage.clear()
    this.router.navigate(['/login'])
  }

  getData() {
    return this.fireStore.collection('users').valueChanges({ idField: 'id' })
  }

  updateData(currentData: User, data: any) {
    return this.fireStore.collection('users').doc(currentData.id).update(data)
  }

  // onInit() {
  //   this.fireStore.collection('users').snapshotChanges().forEach((changes) => {
  //     changes.map((a) => {
  //       this.id = a.payload.doc.id;
  //       console.log(this.id)
  //     })
  //   })
  // }

  // deleteData() {
  //   this.fireStore.collection('users').doc(this.id).delete();
  // }
}
