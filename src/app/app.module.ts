import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CustomCommonModule } from './common/common.module';
import { CustomInterceptorService } from './common/custom-interceptor/custom-interceptor.service';
import { MaterialSharedModule } from './material-shared/material-shared.module';
import { UserModule } from './user/user.module';
import { AdminModule } from './admin/admin.module';
import { ProductModule } from './user/product/product.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ErrorHandlerService } from './common/error-handler/error-handler.service';






@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CustomCommonModule,
    MaterialSharedModule,
    UserModule,
    AdminModule,
    ProductModule,
    HttpClientModule

  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: CustomInterceptorService, multi: true },
    { provide: ErrorHandler, useClass: ErrorHandlerService}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
