import { Component, OnInit, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Dish } from 'src/app/store/dish.state';
import * as dishAction from '../../../../../store/dish/dish.actions'

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
  dishes!: Dish[];
  dishTypes: dishType[] = [
    { value: 'Main Dish', viewValue: 'Main Dish' },
    { value: 'Side Dish', viewValue: 'Side Dish' },
  ];
  dishForm!: FormGroup;
  actionBtn: string = 'Save';
  header: string = 'Add Dish';

  constructor(@Inject(MAT_DIALOG_DATA) public editData: any,
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<DishesDialogComponent>,
    private store: Store <{ dishes: [any] }>) { }

  getDishForm() {
    this.dishForm = this.formBuilder.group({
      id: [''],
      dish_name: ['', Validators.required],
      dish_type: ['', Validators.required],
      dish_image: [''],
      price: ['', Validators.required],
      status: ['', Validators.required],
    })
    if (this.editData) {
      this.header = 'Edit Dish'
      this.actionBtn = 'Update';
      this.dishForm.controls['id'].setValue(this.editData.id)
      this.dishForm.controls['dish_name'].setValue(this.editData.dish_name)
      this.dishForm.controls['dish_type'].setValue(this.editData.dish_type)
      this.dishForm.controls['dish_image'].setValue(this.editData.dish_image)
      this.dishForm.controls['price'].setValue(this.editData.price)
      this.dishForm.controls['status'].setValue(this.editData.status)
    } else {
      return false;
    }
  }

  submitForm() {
    if (!this.editData && this.dishForm.valid) {
      const data = this.dishForm.value;
      this.store.dispatch(dishAction.addDishesRequested({ payload: data }));
      this.dialogRef.close()
    } else {
      this.updateDish()
    }
  }

  updateDish() {
    const data = {
      id: this.dishForm.value.id,
      dish_name: this.dishForm.value.dish_name,
      dish_type: this.dishForm.value.dish_type,
      dish_image: this.dishForm.value.dish_image,
      price: this.dishForm.value.price,
      status: this.dishForm.value.status,
    }
    console.log('update', data)
    const getDishId = this.editData.id
    this.store.dispatch(dishAction.updateDishesRequested({ payload: { dishId: getDishId, updateDish: data }}));
    this.dialogRef.close()
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
    this.getDishForm();
  }

}
