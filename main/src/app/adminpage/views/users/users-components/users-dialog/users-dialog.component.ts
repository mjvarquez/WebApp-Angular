import { Component, OnInit, Inject } from '@angular/core';
// import { Store } from '@ngrx/store';

import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';

import { UsersService } from '../../../../../store/users/users.service'

interface userType {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-users-dialog',
  templateUrl: './users-dialog.component.html',
  styleUrls: ['./users-dialog.component.scss']
})
export class UsersDialogComponent implements OnInit {
  userTypes: userType[] = [
    { value: 'admin', viewValue: 'Admin' },
    { value: 'employee', viewValue: 'Employee' },
  ];
  userForm!: FormGroup;
  actionBtn: string = 'Save';
  header: string = 'Add Dish';

  constructor(@Inject(MAT_DIALOG_DATA) public editData: any,
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<UsersDialogComponent>,
    private userService: UsersService) { }

  getUserForm() {
    this.userForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      user_type: ['', Validators.required],
    })
    if (this.editData) {
      this.header = 'Edit Dish'
      this.actionBtn = 'Update';
      this.userForm.controls['name'].setValue(this.editData.name)
      this.userForm.controls['email'].setValue(this.editData.email)
      this.userForm.controls['password'].setValue(this.editData.password)
      this.userForm.controls['user_type'].setValue(this.editData.user_type)
    } else {
      return false;
    }
  }

  addUser() {
    if (!this.editData && this.userForm.valid) {
      const data = {
        name: this.userForm.value.name,
        email: this.userForm.value.email,
        password: this.userForm.value.password,
        user_type: this.userForm.value.user_type,
      }
      this.userService.getRegisterUser(this.userForm.value).subscribe({
        next: (res) => {
          alert("submitted successfully!")
          this.userForm.reset()
          console.log(res)
        },
        error: (err) => {

        }
      })
    } else {
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
