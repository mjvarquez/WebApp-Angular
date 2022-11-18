import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/store/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(private fb: FormBuilder,
    private router: Router,
    private authService: AuthService) { }

  getLoginForm() {
    this.loginForm = this.fb.group({
      email: ['', Validators.compose([Validators.required])],
      password: ['', Validators.compose([Validators.required])]
    });
  }

  login() {
    if (this.loginForm.value.email !== "" && this.loginForm.value.password !== "") {
      this.authService.signIn(this.loginForm.value)
    }
  }

  ngOnInit(): void {
    this.getLoginForm();
  }

}
