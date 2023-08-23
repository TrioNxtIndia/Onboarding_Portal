import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { HomeComponent } from './pages/home/home.component';
import { CustomerRegistrationComponent } from './pages/customer-registration/customer-registration.component';
import { CustomerListComponent } from './pages/customer-list/customer-list.component';
import { CustomerDetailsComponent } from './pages/customer-details/customer-details.component';
import { ProjectComponent } from './pages/project/project.component';
import { TeamComponent } from './pages/team/team.component';
import { MemberRegistrationComponent } from './pages/member-registration/member-registration.component';
import { ViewTeamComponent } from './pages/view-team/view-team.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full'},
  { path: "login", component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'home', component: HomeComponent },
  { path: 'customer-register', component: CustomerRegistrationComponent },
  { path: 'list', component: CustomerListComponent },
  { path: 'details/:id', component: CustomerDetailsComponent },
  { path: 'update/:id', component: CustomerRegistrationComponent },
  { path: 'project', component: ProjectComponent },
  { path: 'team', component: TeamComponent},
  { path: 'add-member/:id', component: MemberRegistrationComponent},
  { path: 'view-team/:id', component: ViewTeamComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
