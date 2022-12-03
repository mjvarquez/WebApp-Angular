import { Component, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';

import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Observable } from 'rxjs';
import { MatTableDataSource } from '@angular/material/table';

import { UsersDialogComponent } from './users-components/users-dialog/users-dialog.component';
import { AuthService } from 'src/app/store/auth-user/auth.service';
import { User } from 'src/app/store/user.state';
import * as userAction from '../../../store/auth-user/auth.actions';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users!: User[];
  users$!: Observable<any>;
  dataSource!: any;
  displayedColumns: string[] = ['name', 'email', 'role', 'action'];

  constructor(private dialog: MatDialog,
    private authService: AuthService,
    private store: Store< {users: [any] } >) { }

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  getAllUsers() {
    this.store.dispatch(userAction.loadUsersRequested());
    this.users$ = this.store.select('users');
    this.users$.subscribe({
      next: (res) => {
        console.log(res.user)
        this.dataSource = new MatTableDataSource(res.user);
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

  deleteUser(id: number) {
    if (confirm('Delete?')) {
      this.store.dispatch(userAction.deleteUsersRequested({ id: id }));
    }
    console.log(id)
  }

  ngOnInit(): void {
    this.getAllUsers()
  }

}
