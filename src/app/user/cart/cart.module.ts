import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartRoutingModule } from './cart-routing.module';
import { MaterialSharedModule } from 'src/app/material-shared/material-shared.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CartRoutingModule,
    MaterialSharedModule
  ]
})
export class CartModule { }
