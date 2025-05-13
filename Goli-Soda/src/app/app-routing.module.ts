import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './shared/login/login.component';
import { CustomerComponent } from './modules/customer/customer.component';
import { SideMenuComponent } from './shared/side-menu/side-menu.component';
import { ProductionTrackerComponent } from './modules/production-tracker/production-tracker.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path:'login', component:LoginComponent
  },
  {
    path:'customer', component:CustomerComponent
  },
  {
    path:'side-menu', component:SideMenuComponent
  },
  {
    path: 'production-tracker', component:ProductionTrackerComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
