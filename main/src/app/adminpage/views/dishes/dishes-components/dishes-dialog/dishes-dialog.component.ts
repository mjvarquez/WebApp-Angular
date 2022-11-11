import { Component, OnInit, Inject } from '@angular/core';
// import { Store } from '@ngrx/store';

import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';

interface dishType {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-dishes-dialog',
  templateUrl: './dishes-dialog.component.html',
  styleUrls: ['./dishes-dialog.component.scss']
})
export class DishesDialogComponent implements OnInit {
  dishTypes: dishType[] = [
    { value: 'mainDish', viewValue: 'Main Dish' },
    { value: 'sideDish', viewValue: 'Side Dish' },
  ];
  dishForm!: FormGroup;
  actionBtn: string = 'Save';
  header: string = 'Add Dish';

  constructor(@Inject(MAT_DIALOG_DATA) public editData: any,
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<DishesDialogComponent>) { }

  getDishForm() {
    this.dishForm = this.formBuilder.group({
      name: ['', Validators.required],
      dish_type: ['', Validators.required],
      price: ['', Validators.required],
      status: ['', Validators.required],
    })
    if (this.editData) {
      this.header = 'Edit Dish'
      this.actionBtn = 'Update';
      this.dishForm.controls['name'].setValue(this.editData.name)
      this.dishForm.controls['dish_type'].setValue(this.editData.dish_type)
      this.dishForm.controls['price'].setValue(this.editData.price)
      this.dishForm.controls['status'].setValue(this.editData.status)
    } else {
      return false;
    }
  }

  addDish() {
    // if (!this.editData && this.articleForm.valid) {
    //   const data = {
    //     name: this.articleForm.value.name,
    //     image_link: this.articleForm.value.image_link,
    //     description: this.articleForm.value.description,
    //     price: this.articleForm.value.price,
    //   }
    //   this.store.dispatch(Articles2Action.addArticles2sRequested({ payload: data }))
    //   this.dialogRef.close('add')
    //   this.openSnackBar('Added Successfully!', 'Close')
    // } else {
    //   this.updateArticle()
    // }
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
    this.getDishForm();
  }

}
