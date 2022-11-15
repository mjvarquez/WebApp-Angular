import { Component, OnInit, ViewChild } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

import { DishesDialogComponent } from './dishes-components/dishes-dialog/dishes-dialog.component';

@Component({
  selector: 'app-dishes',
  templateUrl: './dishes.component.html',
  styleUrls: ['./dishes.component.scss']
})
export class DishesComponent implements OnInit {
  dataSource!: any;
  displayedColumns: string[] = ['id', 'name', 'dish_type', 'price', 'status', 'action'];

  constructor(private dialog: MatDialog) { }

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  applyEvent(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  openDialog() {
    this.dialog.open(DishesDialogComponent, {})
  }

  ngOnInit(): void {
  }

}
