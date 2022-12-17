// import { Injectable } from "@angular/core";
// import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
// import { Observable } from "rxjs";
// import { Store } from "@ngrx/store";

// import * as userAction from '../store/auth-user/auth/auth.actions'

// @Injectable({ providedIn: 'root' })
// export class AuthTokenResolver implements Resolve<string> {
//   constructor(private store: Store) {}

//   resolve(
//     route: ActivatedRouteSnapshot,
//     state: RouterStateSnapshot
// //   ): Observable<string>|Promise<string>|string|void {
//   ): Observable<string>|Promise<string>|string {

//     const token: string | null | undefined = localStorage.getItem('token');
//     // console.log()

//     if (!token) {
//         return '';
//     }else{
//         this.store.dispatch(userAction.loginAuthsRequested())
//     }
//   }
// }