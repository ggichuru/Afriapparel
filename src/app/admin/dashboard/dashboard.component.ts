import { Component, OnInit } from '@angular/core';
import { DashboardService } from './service/dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  orderData: any;
  orders: any;
  displayColumns: string[] = ['_id', 'orderID', 'total', 'createdOn', 'status', 'actions'];

  constructor(
    private dashboardService: DashboardService
  ) { }

  ngOnInit(): void {
    this.dashboardService.getDashboard().subscribe((result) => {
      this.orderData = result.data;
      this.orders = result.data.orders;
    });
  }

  // tslint:disable : typedef
  trackByFn(index: number, item: any) {
    return item._id;
  }
}
