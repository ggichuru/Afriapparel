import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { AdminOrderService } from '../service/admin-order.service';

@Component({
  selector: 'app-order-update',
  templateUrl: './order-update.component.html',
  styleUrls: ['./order-update.component.scss']
})
export class OrderUpdateComponent implements OnInit {

  updateStatusForm: FormGroup;
  orderDetails: any;
  displayedColumns: string[] = ['productName', 'qty', 'price', 'total'];
  orderStatus = ['Shipped', 'Delivered'];

  constructor(
    private orderService: AdminOrderService,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.updateStatusForm = this.fb.group({
      status: new FormControl('', Validators.required),
      courierInfo: this.fb.group({
        trackingNumber: new FormControl(''),
        courierName: new FormControl('')
      })
    });

    this.route.params.subscribe((data) => {
      const orderId = data.get('id');
      this.orderService.getOrderDetails(orderId).subscribe((result) => {
        this.orderDetails = result.data;
      });
    });
  }

  // tslint:disable: typedef
  updateStatus(orderId: any) {
    const orderStatusInfo = this.updateStatusForm.value;
    orderStatusInfo._id = orderId;
    this.orderService.updateOrderDetails(orderStatusInfo).subscribe((result) => {
      this.snackBar.open('Order status update', 'Order', {
        duration: 1000
      });
    });
  }
}
