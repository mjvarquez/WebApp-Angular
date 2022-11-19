import { Component, OnInit, Inject } from '@angular/core';
// import { Store } from '@ngrx/store';

import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormBuilder, Validators, FormGroupDirective } from '@angular/forms';

import { AuthService } from '../../../../../store/auth/auth.service'

interface Role {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-users-dialog',
  templateUrl: './users-dialog.component.html',
  styleUrls: ['./users-dialog.component.scss']
})
export class UsersDialogComponent implements OnInit {
  roles: Role[] = [
    { value: 'Admin', viewValue: 'Admin' },
    { value: 'Employee', viewValue: 'Employee' },
  ];
  userForm!: FormGroup;
  actionBtn: string = 'Save';
  header: string = 'Add User';

  constructor(@Inject(MAT_DIALOG_DATA) public editData: any,
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<UsersDialogComponent>,
    private authService: AuthService) { }

  getUserForm() {
    this.userForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      role: ['', Validators.required],
    })
    if (this.editData) {
      this.header = 'Edit User'
      this.actionBtn = 'Update';
      this.userForm.controls['firstName'].setValue(this.editData.firstName)
      this.userForm.controls['lastName'].setValue(this.editData.lastName)
      this.userForm.controls['email'].setValue(this.editData.email)
      this.userForm.controls['role'].setValue(this.editData.role)
    } else {
      return false;
    }
  }

  addUser(formDirective: FormGroupDirective) {
    if (!this.editData && this.userForm.valid) {
      const data = this.userForm.value
      this.authService.signUp(data);
      this.userForm.reset();
      formDirective.resetForm();
    } else {
      this.updateUser()
    }
  }

  updateUser() {
    const data = {
      firstName: this.userForm.value.firstName,
      lastName: this.userForm.value.lastName,
      email: this.userForm.value.email,
      role: this.userForm.value.role,
    }
    const getUserId = this.editData.id
    this.authService.updateData(getUserId, data)
  }

  // openSnackBar(message: string, action: string) {
  //   let snackBarRef = this.snackBar.open(message, action, {
  //     horizontalPosition: 'center',
  //     verticalPosition: 'top',
  //     duration: 5000
  //   })

  // snackBarRef.afterDismissed().subscribe(() => {
  //   window.location.reload()
  // })

  closeDialog() {
    this.dialogRef.close();
    this.userForm.reset();
  }

  ngOnInit(): void {
    this.getUserForm();
  }

}
