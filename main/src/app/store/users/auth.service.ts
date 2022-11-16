import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../user.state';
import { AngularFireAuth } from '@angular/fire/auth'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private fireAuth: AngularFireAuth) { }

  register(email: string, password: string)
}
