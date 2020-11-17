import { NgModule } from '@angular/core';


import { CommonRoutingModule } from './common-routing.module';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { MaterialSharedModule } from '../material-shared/material-shared.module';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [
    MainNavComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    MaterialSharedModule,
    CommonRoutingModule
  ],
  exports: [
    CommonModule,
    MainNavComponent,
    NavbarComponent,
    LoginComponent
  ]
})
export class CustomCommonModule { }
