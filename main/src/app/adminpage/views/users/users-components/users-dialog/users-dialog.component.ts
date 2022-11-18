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
      this.userForm.controls['password'].setValue(this.editData.password)
      this.userForm.controls['user_type'].setValue(this.editData.role)
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
      return false;
    }
  }

  // updateArticle() {
  //   const data = {
  //     name: this.articleForm.value.name,
  //     image_link: this.articleForm.value.image_link,
  //     description: this.articleForm.value.description,
  //     price: this.articleForm.value.price,
  //     is_published: this.articleForm.value.is_published
  //   }
  //   const getArticleId = this.editData.id
  //   this.store.dispatch(Articles2Action.updateArticles2sRequested({ payload: { articleId: getArticleId, updateArticle: data } }))
  //   this.dialogRef.close('update')
  //   this.openSnackBar('Updated Successfully!', 'Close')
  // }

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
    this.dialogRef.close({ event: 'Cancel' });
  }

  ngOnInit(): void {
    this.getUserForm();
  }

}
