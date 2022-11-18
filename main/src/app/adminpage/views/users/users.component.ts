import { Component, OnInit, ViewChild } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Observable } from 'rxjs';
import { MatTableDataSource } from '@angular/material/table';

import { UsersDialogComponent } from './users-components/users-dialog/users-dialog.component';
import { UserService } from '../../../store/users/user.service'
import { User } from 'src/app/store/user.state';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users$!: User[];

  dataSource!: any;
  displayedColumns: string[] = ['firstname', 'lastname', 'email', 'role', 'action'];

  constructor(private dialog: MatDialog,
    private userService: UserService) { }

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  getAllUsers() {
    this.userService.getData().subscribe({
      next: (res) => {
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort
        console.log(this.dataSource)
        console.log("user data", res);
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
    this.dialog.open(UsersDialogComponent, {})
  }

  ngOnInit(): void {
    this.getAllUsers()
  }

}
