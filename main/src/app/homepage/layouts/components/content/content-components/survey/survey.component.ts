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

  constructor(private orderMenuService: OrderMenuService) { }

  getTodayMenu() {
    this.orderMenuService.getData().subscribe({
      next: (res) => {
        const dishes = res;
        const activeMenu = dishes.filter((c: any) => c.status == "Active");
        this.todayMenus = activeMenu;
        console.log(this.todayMenus);
      }
    });
  }

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }

  ngOnInit(): void {
    this.getTodayMenu();
  }
}
