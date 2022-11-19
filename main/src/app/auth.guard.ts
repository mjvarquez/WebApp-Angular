import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

import { AngularFirestore } from '@angular/fire/firestore';
import { AuthService } from './store/auth/auth.service';

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {

  constructor(private router: Router,
    private fireStore: AngularFirestore,
    private authService: AuthService) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    // if (localStorage.getItem('uid') != null) {
    //   if (route.data.roles && route.data.roles.indexOf(this.authService.currentRole) === -1) {
    //     this.router.navigate(['/login'])
    //   }
    // } else {

    // }

    // if (localStorage.getItem('uid') != null) {
    //   return true;
    // } else {
    //   this.router.navigate(['/login'])
    //   return false;
    // }
    let url: string = state.url;
    return this.checkUserLogin(route, url)
  }

  checkUserLogin(route: ActivatedRouteSnapshot, url: any): boolean {
    if (this.authService.isLoggedIn()) {
      const userRole = this.authService.getRole();
      if (route.data.roles && route.data.roles.indexOf(userRole) === -1) {
        this.router.navigate(['/login']);
        return false;
      }
      return true;
    }
    return false;
  }
}
