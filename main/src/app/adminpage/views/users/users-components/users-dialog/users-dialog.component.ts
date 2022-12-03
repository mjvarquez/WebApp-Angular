import { Component, OnInit, Inject } from '@angular/core';
import { Store } from '@ngrx/store';

import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { User } from '../../../../../store/user.state';
import * as userAction from '../../../../../store/auth-user/auth.actions';

interface Role {
  value: string;
  label: string;
}

@Component({
  selector: 'app-users-dialog',
  templateUrl: './users-dialog.component.html',
  styleUrls: ['./users-dialog.component.scss']
})
export class UsersDialogComponent implements OnInit {
  users!: User[];
  roles: Role[] = [
    { value: '1', label: 'Admin(1)' },
    { value: '2', label: 'Employee(2)' },
  ];
  userForm!: FormGroup;
  actionButton: string = 'Save';
  headerTitle: string = 'Add User';

  constructor(@Inject(MAT_DIALOG_DATA) public editData: any,
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<UsersDialogComponent>,
    private store: Store< {} >) { }

  formDetails() {
    this.userForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      role_id: ['', Validators.required],
    })
    if (this.editData) {
      this.userForm = this.formBuilder.group({
        name: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        role_id: ['', Validators.required],
        status: ['', Validators.required]
      })
      this.headerTitle = 'Edit User';
      this.actionButton = 'Update';
      this.userForm.controls['name'].setValue(this.editData.name)
      this.userForm.controls['email'].setValue(this.editData.email)
      this.userForm.controls['role_id'].setValue(this.editData.role)
      this.userForm.controls['status'].setValue(this.editData.status)
    }
  }

  submitForm() {
    if (!this.editData && this.userForm.valid) {
      const data = this.userForm.value;
      this.store.dispatch(userAction.addUsersRequested({ payload: data }))
      this.dialogRef.close()
    } else {
      this.updateUser()
    }
  }

  updateUser() {
    const data = {
      name: this.userForm.value.name,
      email: this.userForm.value.email,
      role_id: this.userForm.value.role,
      status: this.userForm.value.status
    };
    const getUserId = this.editData.id;
    this.store.dispatch(userAction.updateUsersRequested({payload: {userId: getUserId, updateUser: data}}));
    this.dialogRef.close();
  }

  closeDialog() {
    this.dialogRef.close();
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

  ngOnInit(): void {
    this.formDetails();
  }

}
