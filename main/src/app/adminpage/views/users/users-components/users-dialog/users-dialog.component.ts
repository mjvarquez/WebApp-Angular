import { Component, OnInit, Inject } from '@angular/core';
// import { Store } from '@ngrx/store';

import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { AuthService } from '../../../../../store/auth/auth.service'

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
  roles: Role[] = [
    { value: 'Admin', label: 'Admin' },
    { value: 'Employee', label: 'Employee' },
  ];
  userForm!: FormGroup;
  actionButton: string = 'Save';
  headerTitle: string = 'Add User';
  date = new Date().toLocaleString();

  constructor(@Inject(MAT_DIALOG_DATA) public editData: any,
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<UsersDialogComponent>,
    private authService: AuthService) { }

  formDetails() {
    this.userForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      role: ['', Validators.required],
    })
    if (this.editData) {
      this.userForm = this.formBuilder.group({
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        role: ['', Validators.required],
      })
      this.headerTitle = 'Edit User';
      this.actionButton = 'Update';
      this.userForm.controls['firstName'].setValue(this.editData.firstName)
      this.userForm.controls['lastName'].setValue(this.editData.lastName)
      this.userForm.controls['email'].setValue(this.editData.email)
      this.userForm.controls['role'].setValue(this.editData.role)
    }
  }

  submitForm() {
    if (!this.editData && this.userForm.valid) {
      const data = this.userForm.value;
      this.authService.createUser(data);
      this.dialogRef.close()
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
      updated_at: this.date
    };
    const getUserId = this.editData.id;
    this.authService.updateData(getUserId, data);
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
