import { Component, OnInit } from '@angular/core';

import { OrderMenuService } from 'src/app/store/homepage/order-menu.service';

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.scss']
})
export class SurveyComponent implements OnInit {
  panelOpenState = false;
  step = 0;
  todayMenus!: any[];
  checkedItems = new Array<string>();

  constructor(private orderMenuService: OrderMenuService) { }

  getTodayMenu() {
    this.orderMenuService.getData().subscribe({
      next: (res) => {
        const dishes = res;
        const activeMenu = dishes.filter((c: any) => c.status == "Active");
        this.todayMenus = activeMenu;
        console.log("todayMenus", this.todayMenus);
      }
    });
  }
  
  selectedItem(event: any, todayMenu: string){
    if(event.checked){
      console.log("checked", todayMenu);
      this.checkedItems.push(todayMenu);
      console.log(this.checkedItems)
    }else{
      this.checkedItems = this.checkedItems.filter( c => c !== todayMenu);
      console.log("unchecked", todayMenu)
      console.log(this.checkedItems)
    }
  }

  onVote(){
    const data = this.checkedItems;
    console.log("Voted Dish", data)
    this.orderMenuService.addData(data);
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
  }
}
