import { Component, OnInit } from '@angular/core';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';

import { AuthService } from 'src/app/store/auth-user/auth.service';

@Component({
  selector: 'app-horizontal-header',
  templateUrl: './horizontal-header.component.html',
  styleUrls: []
})
export class HorizontalAppHeaderComponent implements OnInit {
  public config: PerfectScrollbarConfigInterface = {};
  firstName!: any;
  lastName!: any;
  role!: any;

  constructor(private authService: AuthService) { }

  logOut() {
    this.authService.signOut();
  }

  ngOnInit(): void {
    this.firstName = localStorage.getItem('firstName')
    this.lastName = localStorage.getItem('lastName')
    this.role = localStorage.getItem('role')
  }
}
