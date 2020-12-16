import { Component, OnInit } from '@angular/core';
import { OrderService } from './service/order.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  orders = [];
  displayedColumns: string[] = ['_id', 'orderId', 'total', 'createdOn', 'status', 'actions'];

  constructor(
    private orderService: OrderService
  ) { }

  ngOnInit(): void {
    this.orderService.getUserOrders().subscribe((result) => this.orders = result.data);
  }

}
