import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { DashboardService } from 'src/app/store/dashboard/dashboard.service';

import { Dish } from '../../../../../store/dish.state'

@Component({
  selector: 'app-top-card',
  templateUrl: './top-card.component.html',
  styleUrls: ['./top-card.component.scss']
})
export class TopCardComponent implements OnInit {
  dishes!: any;
  totalDish = { count: 0 };
  activeDish = { count: 0 };
  inactiveDish = { count: 0 };

  users!: any;
  totalUser = { count: 0 };

  constructor(private dashboardService: DashboardService) { }

  getTotalDishes() {
    this.dishes = this.dashboardService.getDishData().subscribe({
      next: (res) => {
        this.dishes = res;
        this.totalDish.count = this.dishes.length;

        const totalActiveDish = this.dishes.filter((c: any) => c.status == "Active");
        const totalInactiveDish = this.dishes.filter((c: any) => c.status == "Inactive");
        this.activeDish.count = totalActiveDish.length;
        this.inactiveDish.count = totalInactiveDish.length;

        console.log("all dish data", this.dishes)
      },
      error: (err) => {

      }
    })
  }

  getTotalusers() {
    this.users = this.dashboardService.getUserData().subscribe({
      next: (res) => {
        this.users = res;
        this.totalUser.count = this.users.length
      }
    })
  }

  ngOnInit(): void {
    this.getTotalDishes();
    this.getTotalusers();
  }

}
