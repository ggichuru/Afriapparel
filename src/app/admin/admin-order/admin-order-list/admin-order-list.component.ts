import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-order-list',
  templateUrl: './admin-order-list.component.html',
  styleUrls: ['./admin-order-list.component.scss']
})
export class AdminOrderListComponent implements OnInit {

  @Input() orders: any;
  displayedColumns: string[] = ['_id', 'orderId', 'total', 'createdOn', 'status', 'actions'];

  constructor() { }

  ngOnInit(): void {
  }

}
