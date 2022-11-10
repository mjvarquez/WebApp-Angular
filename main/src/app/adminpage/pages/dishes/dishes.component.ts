import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dishes',
  templateUrl: './dishes.component.html',
  styleUrls: ['./dishes.component.scss']
})
export class DishesComponent implements OnInit {
  dataSource!: any;
  displayedColumns: string[] = ['id', 'name', 'image_link', 'description', 'price', 'action'];

  constructor() { }

  applyEvent(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  // openDialog() {
  //   this.dialog.open(DialogComponent, {})
  // }

  ngOnInit(): void {
  }

}
