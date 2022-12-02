import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';

import { OrderMenuService } from 'src/app/store/homepage/order-menu.service';

// const currentDate = new Date();
// currentDate.setDate(currentDate.getDate() + 1);
// const tomorrowDate = currentDate.toISOString().slice(0, 10);

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.scss']
})

export class SurveyComponent implements OnInit {
  // checkForm!: FormGroup;
  // surveyForm!: FormGroup;
  // panelOpenState = false;
  // step = 0;
  // activeDishes!: any[];
  // checkedItems = new Array<string>();
  // userId!: any;
  // tomorrowDate = tomorrowDate;

  constructor(private orderMenuService: OrderMenuService,
              private formBuilder: FormBuilder) { } 

  // selectedItem(event: any, selectedDish: string){
  //   if(event.checked){
  //     this.checkedItems.push(selectedDish);
  //   }else{
  //     this.checkedItems = this.checkedItems.filter( c => c !== selectedDish);
  //   }
  // }

  // getSurveyForm(){
  //   this.surveyForm = this.formBuilder.group({
  //     date_served: [this.tomorrowDate, Validators.required],
  //     selectedItem: [false, Validators.requiredTrue]
  //   })
  // }

  // getTodayMenu() {
  //   this.orderMenuService.getDishData().subscribe({
  //     next: (res) => {
  //       const dishes = res;
  //       const activeMenu = dishes.filter((c: any) => c.status == "Active");
  //       this.activeDishes = activeMenu;
  //     }
  //   });
  // }
  
  // onVote(){
  //   const dateServed = this.surveyForm.value;
  //   const dishes = this.checkedItems;
  //   const data = {...dateServed, dishes: dishes, user_id: this.userId};
  //   if(data){
  //     this.orderMenuService.addData(data);
  //   }
  // }

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
    // const userId = localStorage.getItem('id');
    // this.userId = userId;
    // this.getTodayMenu();
    // this.getSurveyForm();
    // this.checkForm = this.formBuilder.group({
    //   checkItems: this.formBuilder.array([], [Validators.required]);
    // })
    // this.orderMenuService.getUserDataId();
    // this.orderMenuService.getUserData();
  }
}
