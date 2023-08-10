import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerRegistrationComponent } from './customer-registration/customer-registration.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerDetailComponent } from './customer-detail/customer-detail.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'list' },
  {
    path: "register", component: CustomerRegistrationComponent 
  },
  {
    path: "list", component: CustomerListComponent 
  },
  {
    path: "detail/:id", component: CustomerDetailComponent 
  },
  {
    path: "update/:id", component: CustomerRegistrationComponent 
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
