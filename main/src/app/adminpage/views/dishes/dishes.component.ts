import { Component, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

import { Dish, DishState } from 'src/app/store/dish.state';
import * as dishAction from '../../../store/dish/dish.actions';
import { DishesDialogComponent } from './dishes-components/dishes-dialog/dishes-dialog.component';

@Component({
  selector: 'app-dishes',
  templateUrl: './dishes.component.html',
  styleUrls: ['./dishes.component.scss']
})
export class DishesComponent implements OnInit { 
  dishes!: Dish[];
  dishes$!: Observable<any>;
  dataSource!: any;
  displayedColumns: string[] = ['dishName', 'dishType', 'price', 'status', 'action'];

  constructor(private dialog: MatDialog,
    private store: Store<{ dishes: [any] }>) { }

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  // getAllDishes() {
  //     this.store.dispatch(dishAction.loadDishesRequested());
  //     this.dishes$ = this.store.select('dishes');
  //     this.dishes$.subscribe({
  //       next: (res) => {
  //         console.log(res)
  //         this.dataSource = new MatTableDataSource(res);
  //       },
  //       error: (err) => {

  //       }
  //     })
  // }

  applyEvent(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  openDialog() {
    this.dialog.open(DishesDialogComponent, {
      height: 'auto',
      width: '500px',
    })
  }

  openEditDialog(row: any) {
    this.dialog.open(DishesDialogComponent, {
      height: 'auto',
      width: '500px',
      data: row
    })
  }

  // deleteDish(id: any) {
  //   if (confirm('Delete?')) {
  //     this.dishService.deleteData(id)
  //   }
  //   console.log(id)
  // }

  ngOnInit(): void {
    // this.getAllDishes()
  }
}
