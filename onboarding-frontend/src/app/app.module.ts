import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CustomerRegistrationComponent } from './pages/customer-registration/customer-registration.component';
import { CustomerListComponent } from './pages/customer-list/customer-list.component';
import { CustomerDetailsComponent } from './pages/customer-details/customer-details.component';
import { MatModule } from './appModules/mat.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgToastModule } from 'ng-angular-popup';
import { NgConfirmModule } from 'ng-confirm-box';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { ForgetPasswordComponent } from './auth/forget-password/forget-password.component';
import { HomeComponent } from './pages/home/home.component';
import { ProjectComponent } from './pages/project/project.component';
import { ProjectDialogComponent } from './includes/project-dialog/project-dialog.component';
import { TeamComponent } from './pages/team/team.component';
import { TeamDialogComponent } from './includes/team-dialog/team-dialog.component';
import { MemberRegistrationComponent } from './pages/member-registration/member-registration.component';
import { ViewTeamComponent } from './pages/view-team/view-team.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerRegistrationComponent,
    CustomerListComponent,
    CustomerDetailsComponent,
    LoginComponent,
    RegisterComponent,
    ForgetPasswordComponent,
    HomeComponent,
    ProjectComponent,
    ProjectDialogComponent,
    TeamComponent,
    TeamDialogComponent,
    MemberRegistrationComponent,
    ViewTeamComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgToastModule,
    NgConfirmModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
