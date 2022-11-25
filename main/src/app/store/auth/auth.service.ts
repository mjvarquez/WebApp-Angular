import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { AngularFirestore } from '@angular/fire/firestore'
import { AngularFireAuth } from '@angular/fire/auth'

import { Authentication } from '../user.state';

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

  createUser(data: Authentication) {
    this.fireAuth.createUserWithEmailAndPassword(data.email, data.password)
      .then((res) => {
        console.log(res)
        const userDetails = {
          "uid": res.user?.uid,
          "firstName": data.firstName,
          "lastName": data.lastName,
          "email": data.email,
          "role": data.role,
          "created_at": this.date,
          "updated_at": ''
        }
        this.fireStore.collection('users').add(userDetails)
        if (userDetails) {
          alert('Registered User Successfully')
        }
      }, err => {
        console.log(err)
      })
  }

  signIn(email: string, password: string) {
    this.fireAuth.signInWithEmailAndPassword(email, password)
      .then((res) => {
        this.fireStore.collection('users').ref.where("email", "==", res.user?.email).onSnapshot(snap => {
          snap.forEach((userRef: any) => {
            this.isSignedIn = true;
            this.currentRole = userRef.data().role;
            localStorage.setItem("state", "true")
            localStorage.setItem("role", userRef.data().role)
            localStorage.setItem("uid", res.user!.uid);
            localStorage.setItem("firstName", userRef.data().firstName)
            localStorage.setItem("lastName", userRef.data().lastName)
            console.log(this.currentRole)
            console.log('userRef', userRef.data())
            if (userRef.data().role === "Admin" && localStorage.getItem('uid') != null && userRef.data().uid === res.user?.uid) {
              this.router.navigate(['/dashboard'])
              alert('Login Successfully');
            } else {
              alert('Login Successfully');
              this.router.navigate(['/homepage'])
            }
          })
        })
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
    return this.currentRole
  }

  signOut() {
    this.fireAuth.signOut();
    localStorage.clear();
    this.router.navigate(['/login']);
  }

  getData() {
    return this.fireStore.collection('users').valueChanges({ idField: 'id' });
  }

  updateData(id: string, data: any) {
    return this.fireStore.collection('users').doc(id).update(data);
  }

  deleteData(id: string) {
    return this.fireStore.collection('users').doc(id).delete();
  }
}
