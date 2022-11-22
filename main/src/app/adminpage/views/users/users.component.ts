import { Component, OnInit, ViewChild } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Observable } from 'rxjs';
import { MatTableDataSource } from '@angular/material/table';

import { UsersDialogComponent } from './users-components/users-dialog/users-dialog.component';
import { AuthService } from 'src/app/store/auth/auth.service';
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
    private authService: AuthService) { }

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  getAllUsers() {
    this.authService.getData().subscribe({
      next: (res) => {
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort
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
    this.dialog.open(UsersDialogComponent, {
      height: 'auto',
      width: '500px',
    })
  }

  openEditDialog(row: any) {
    this.dialog.open(UsersDialogComponent, {
      height: 'auto',
      width: '500px',
      data: row
    })
  }

  deleteUser(id: any) {
    if (confirm('Delete?')) {
      this.authService.deleteData(id)
    }
    console.log(id)
  }

  ngOnInit(): void {
    this.getAllUsers()
  }

}
