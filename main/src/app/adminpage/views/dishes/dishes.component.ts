import { Component, OnInit, ViewChild } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { DishService } from 'src/app/store/dish/dish.service';

import { DishesDialogComponent } from './dishes-components/dishes-dialog/dishes-dialog.component';

@Component({
  selector: 'app-dishes',
  templateUrl: './dishes.component.html',
  styleUrls: ['./dishes.component.scss']
})
export class DishesComponent implements OnInit {
  dataSource!: any;
  displayedColumns: string[] = ['dishName', 'dishType', 'price', 'status', 'action'];

  constructor(private dialog: MatDialog,
    private dishService: DishService) { }

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  getAllDishes() {
    this.dishService.getData().subscribe({
      next: (res) => {
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort
        console.log("dish data", res);
      },
      error: (err) => {

      }
    })
  }

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

  deleteDish(id: any) {
    if (confirm('Delete?')) {
      this.dishService.deleteData(id)
    }
    console.log(id)
  }

  ngOnInit(): void {
    this.getAllDishes()
  }

}
