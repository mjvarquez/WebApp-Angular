import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

import { ContentService } from '../../content.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
  orderedMenu!: any[];
  dataSource!: any;
  displayedColumns: string[] = ['dish_name', 'qty', 'price'];

  constructor(private contentService: ContentService) { }

  ngOnInit(): void {
    this.contentService.orderMenu.subscribe(res => {
      this.orderedMenu = res
      console.log(this.orderedMenu.length)
      this.dataSource = new MatTableDataSource(this.orderedMenu)
    })
  }

}
