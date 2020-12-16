import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { ProductComponent } from './product/product.component';
import { ProductDetailsComponent } from './product/product-details/product-details.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { ProfileComponent } from './profile/profile.component';
import { ProfileEditComponent } from './profile/profile-edit/profile-edit.component';
import { MaterialSharedModule } from '../material-shared/material-shared.module';
import { ProductModule } from './product/product.module';
import { CartComponent } from './cart/cart.component';
import { CartModule } from './cart/cart.module';
import { OrderModule } from './order/order.module';
import { PaymentComponent } from './payment/payment.component';
import { NgxPayPalModule } from 'ngx-paypal-v4';



@NgModule({
  declarations: [UserDashboardComponent, ProfileComponent, ProfileEditComponent, CartComponent, PaymentComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    MaterialSharedModule,
    ProductModule,
    CartModule,
    OrderModule,
    NgxPayPalModule,
  ],

})
export class UserModule { }
