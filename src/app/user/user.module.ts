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


@NgModule({
  declarations: [UserDashboardComponent, ProfileComponent, ProfileEditComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    MaterialSharedModule,
    ProductModule
  ],

})
export class UserModule { }
