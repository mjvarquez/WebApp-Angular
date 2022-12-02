import { Component, OnInit } from '@angular/core';

import { DashboardService } from 'src/app/store/dashboard/dashboard.service';

@Component({
  selector: 'app-top-card',
  templateUrl: './top-card.component.html',
  styleUrls: ['./top-card.component.scss']
})
export class TopCardComponent implements OnInit {
  totalCount = {
    allDish: 0,
    activeDish: 0,
    inactiveDish: 0,
    allUser: 0
  }
  totalDish = { count: 0 };
  activeDish = { count: 0 };
  inactiveDish = { count: 0 };
  totalUser = { count: 0 };

  constructor(private dashboardService: DashboardService) { }

  // getTotalDishes() {
  //   this.dashboardService.getDishData().subscribe({
  //     next: (res) => {
  //       const dishes = res;
  //       const totalActiveDish = dishes.filter((c: any) => c.status == "Active");
  //       const totalInactiveDish = dishes.filter((c: any) => c.status == "Inactive");
  //       this.totalDish.count = dishes.length;
  //       this.activeDish.count = totalActiveDish.length;
  //       this.inactiveDish.count = totalInactiveDish.length;
  //       // console.log("all dish data", dishes)
  //     }
  //   })
  // }

  // getTotalusers() {
  //   this.dashboardService.getUserData().subscribe({
  //     next: (res) => {
  //       const users = res;
  //       this.totalUser.count = users.length
  //     }
  //   })
  // }

  // setCount() {
  //   let totalDishCountStop = setInterval(() => {
  //     this.totalCount.allDish++;
  //     if (this.totalCount.allDish == this.totalDish.count) {
  //       clearInterval(totalDishCountStop);
  //     }
  //   }, 150)
  //   let activeDishCountStop = setInterval(() => {
  //     this.totalCount.activeDish++;
  //     if (this.totalCount.activeDish == this.activeDish.count) {
  //       clearInterval(activeDishCountStop);
  //     }
  //   }, 300)
  //   let inactiveDishCountStop = setInterval(() => {
  //     this.totalCount.inactiveDish++;
  //     if (this.totalCount.inactiveDish == this.inactiveDish.count) {
  //       clearInterval(inactiveDishCountStop);
  //     }
  //   }, 300)
  //   let totalUserCountStop = setInterval(() => {
  //     this.totalCount.allUser++;
  //     if (this.totalCount.allUser == this.totalUser.count) {
  //       clearInterval(totalUserCountStop);
  //     }
  //   }, 150)
  // }

  ngOnInit(): void {
    // this.getTotalDishes();
    // this.getTotalusers();
    // this.setCount();
  }
}
