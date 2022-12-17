import { Component, OnInit } from '@angular/core';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';

import { AuthService } from 'src/app/store/auth-user/auth.service';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-horizontal-header',
  templateUrl: './horizontal-header.component.html',
  styleUrls: []
})

export class HorizontalAppHeaderComponent implements OnInit {
  public config: PerfectScrollbarConfigInterface = {};
  firstName$!: Subscription;
  lastName!: any;
  role!: any;

  constructor(private authService: AuthService, private store: Store<any>) { }

  logOut() {
    this.authService.signOut();
  }

  ngOnInit(): void {
    this.firstName$ = this.store.select('auth').subscribe(res => {
      console.log(res)
    })

  }
}
