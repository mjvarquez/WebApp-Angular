import { Component, OnInit, ViewChild } from '@angular/core';

import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-ordersummary',
  templateUrl: './ordersummary.component.html',
  styleUrls: ['./ordersummary.component.scss']
})
export class OrdersummaryComponent implements OnInit {
  dataSource!: any;
  displayedColumns: string[] = ['user', 'dish', 'qty', 'rice_qty', 'payment_method'];

  constructor() { }

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  applyEvent(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  ngOnInit(): void {
  }

}
