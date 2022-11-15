import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
  dataSource!: any;
  displayedColumns: string[] = ['dish_name', 'qty', 'price', 'action'];

  constructor() { }

  ngOnInit(): void {
  }

}
