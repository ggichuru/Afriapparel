import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductComponent } from './product.component';
import { MaterialSharedModule } from 'src/app/material-shared/material-shared.module';

import { FilterPipe } from './filter.pipe';
import { Ng2SearchPipeModule } from 'ng2-search-filter';



@NgModule({
  declarations: [
    ProductComponent,
    ProductListComponent,
    ProductDetailsComponent,
    FilterPipe
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    MaterialSharedModule,
    Ng2SearchPipeModule
  ],

})
export class ProductModule { }
