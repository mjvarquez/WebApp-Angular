import { Component, OnInit, Inject } from '@angular/core';
import { Observable } from 'rxjs';
// import { Store } from '@ngrx/store';

import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { DishService } from 'src/app/store/dish/dish.service';

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
    { value: 'Main Dish', viewValue: 'Main Dish' },
    { value: 'Side Dish', viewValue: 'Side Dish' },
  ];
  dishForm!: FormGroup;
  actionBtn: string = 'Save';
  header: string = 'Add Dish';
  date = new Date().toLocaleString()

  constructor(@Inject(MAT_DIALOG_DATA) public editData: any,
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<DishesDialogComponent>,
    private dishService: DishService) { }

  getDishForm() {
    this.dishForm = this.formBuilder.group({
      dish_name: ['', Validators.required],
      dish_type: ['', Validators.required],
      price: ['', Validators.required],
      status: ['', Validators.required],
    })
    if (this.editData) {
      this.header = 'Edit Dish'
      this.actionBtn = 'Update';
      this.dishForm.controls['dish_name'].setValue(this.editData.dish_name)
      this.dishForm.controls['dish_type'].setValue(this.editData.dish_type)
      this.dishForm.controls['price'].setValue(this.editData.price)
      this.dishForm.controls['status'].setValue(this.editData.status)
    } else {
      return false;
    }
  }

  // addDish() {
  //   if (!this.editData && this.dishForm.valid) {
  //     const data = this.dishForm.value;
  //     this.dishService.addData(data)
  //     this.dialogRef.close()
  //   } else {
  //     this.updateDish()
  //   }
  // }

  // updateDish() {
  //   const data = {
  //     dishName: this.dishForm.value.dishName,
  //     dishType: this.dishForm.value.dishType,
  //     price: this.dishForm.value.price,
  //     status: this.dishForm.value.status,
  //     updated_at: this.date
  //   }
  //   const getDishId = this.editData.id
  //   this.dishService.updateData(getDishId, data)
  //   this.dialogRef.close()
  // }

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
