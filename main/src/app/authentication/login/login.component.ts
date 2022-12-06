import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/store/auth-user/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginUserForm!: FormGroup;

  constructor(private router: Router,
    private formBuilder: FormBuilder,
    private authService: AuthService) { }

  getLoginForm() {
    this.loginUserForm = this.formBuilder.group({
      email: ['', Validators.compose([Validators.required])],
      password: ['', Validators.compose([Validators.required])]
    });
  }

  loginUser() {
    this.authService.login(this.loginUserForm.value).subscribe({
      next: (res) => {
        console.log(res)
        if (res) {
          this.authService.saveToken(res.access_token)
          // this.authService.saveUser(data)
          this.loginUserForm.reset()
          this.router.navigate(['/dashboard'])
        } else {
          return false;
        }
      },
      error: (err) => {
        console.log(err)
      }
    })
  }

  ngOnInit(): void {
    this.getLoginForm();
  }

}
