import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Router } from '@angular/router';

import { AuthService } from './store/auth-user/auth.service';

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {

  constructor(private router: Router,
    private authService: AuthService) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    if(localStorage.getItem('auth-token') != null){
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }

    // let url: string = state.url;
    // return this.checkUserLogin(route, url)
  }

  // checkUserLogin(route: ActivatedRouteSnapshot, url: any): boolean {
  //   if (this.authService.isLoggedIn()) {
  //     const userRole = this.authService.getRole();
  //     if (route.data.roles && route.data.roles.indexOf(userRole) === -1) {
  //       this.router.navigate(['/login']);
  //       return false;
  //     }
  //     return true;
  //   }

  //   this.router.navigate(['/login']);
  //   return false;
  // }
}
