import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { OrderMenuService } from 'src/app/store/homepage/order-menu.service';

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.scss']
})
export class SurveyComponent implements OnInit {
  checkForm!: FormGroup;
  panelOpenState = false;
  step = 0;
  activeDishes!: any[];
  checkedItems = new Array<string>();

  constructor(private orderMenuService: OrderMenuService,
              private formBuilder: FormBuilder) { }

  getTodayMenu() {
    this.orderMenuService.getDishData().subscribe({
      next: (res) => {
        const dishes = res;
        const activeMenu = dishes.filter((c: any) => c.status == "Active");
        this.activeDishes = activeMenu;
        // console.log("activeDishes", this.activeDishes);
      }
    });
  }
  
  selectedItem(event: any, selectedDish: string){
    if(event.checked){
      // console.log("checked", selectedDish);
      this.checkedItems.push(selectedDish);
      // console.log(this.checkedItems)
    }else{
      this.checkedItems = this.checkedItems.filter( c => c !== selectedDish);
      // console.log("unchecked", selectedDish)
      // console.log(this.checkedItems)
    }
  }

  onVote(){
    let currentDate = new Date();
    currentDate.setDate(currentDate.getDate() + 1);
    let tomorrowDate = currentDate.toLocaleDateString();
    const userId = localStorage.getItem('id');
    const data = this.checkedItems;

    this.orderMenuService.addData(userId, tomorrowDate, data);
  }

  // setStep(index: number) {
  //   this.step = index;
  // }

  // nextStep() {
  //   this.step++;
  // }

  // prevStep() {
  //   this.step--;
  // }

  ngOnInit(): void {
    this.getTodayMenu();
    // this.checkForm = this.formBuilder.group({
    //   checkItems: this.formBuilder.array([], [Validators.required]);
    // })
    // this.orderMenuService.getUserDataId();
    // this.orderMenuService.getUserData();
  }
}
