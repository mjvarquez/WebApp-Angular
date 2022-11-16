import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../user.state';


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  getRegisterUser(data: User): Observable<any> {
    return this.http.post<any>('https://my-webapp-bc970-default-rtdb.firebaseio.com/users.json', data);
  }
}
