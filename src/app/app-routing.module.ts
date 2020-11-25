import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { UserGuard } from './user/guard/user.guard';
import { AdminGuard } from './admin/guard/admin.guard';

const routes: Routes = [];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot([
      {path: 'admin', loadChildren: './admin/admin.module#AdminModule', canLoad: [AdminGuard]},
      {path: 'user', loadChildren: './user/user.module#UserModule', canLoad: [UserGuard]},
    ])
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
