import { Component, OnInit, ViewChild } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

import { UsersDialogComponent } from './users-components/users-dialog/users-dialog.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  dataSource!: any;
  displayedColumns: string[] = ['id', 'name', 'email', 'user_type', 'action'];

  constructor(private dialog: MatDialog) { }

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  applyEvent(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  openDialog() {
    this.dialog.open(UsersDialogComponent, {})
  }

  ngOnInit(): void {
  }

}
