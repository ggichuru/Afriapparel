import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WishlistRoutingModule } from './wishlist-routing.module';
import { WishlistComponent } from './wishlist.component';
import { MaterialSharedModule } from 'src/app/material-shared/material-shared.module';


@NgModule({
  declarations: [WishlistComponent],
  imports: [
    CommonModule,
    WishlistRoutingModule,
    MaterialSharedModule
  ]
})
export class WishlistModule { }
