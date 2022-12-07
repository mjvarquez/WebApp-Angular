import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/store/auth-user/auth.service';
import { Store } from '@ngrx/store';

import { AuthUser } from 'src/app/store/user.state';
import * as authAction from '../../store/auth-user/auth/auth.actions';
import { selectCurrentUser } from 'src/app/store/auth-user/auth/auth.selectors';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
  loginUserForm!: FormGroup;

  constructor(private router: Router,
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private store: Store<AuthUser>) { }
 

  getLoginForm() {
    this.loginUserForm = this.formBuilder.group({
      email: ['', Validators.compose([Validators.required])],
      password: ['', Validators.compose([Validators.required])]
    });
  }

  loginUser() {
    let value = this.loginUserForm.value;
    const data: any = {
      email: value.email,
      password: value.password
    }
    this.store.dispatch(authAction.loginAuthsRequested(data))
  }

  ngOnInit(): void {
    this.getLoginForm();
  } 

}
