// import { NgModule } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';
// import { LoginComponent } from './components/login/login.component';
// import { RegisterComponent } from './components/register/register.component';
// import { ForgotPasswordComponent } from './forgot-password/forgot-password.component'; // Import the new component
// import { ResetPasswordComponent } from './reset-password/reset-password.component';
// import { authGuard } from './guards/auth.guard';
// import { DashboardComponent } from './dashboard/dashboard.component';
// import { ManageUsersComponent } from './manage-users/manage-users.component';



// const routes: Routes = [
//   {
//     path: 'login',
//     component: LoginComponent
//   },
//   { path: 'forgot-password', component: ForgotPasswordComponent },
//   { path: 'reset-password', component: ResetPasswordComponent },
//   {
//     path: 'register',
//     component: RegisterComponent
//   },
// {
//   path:'manage-users',
//   component: ManageUsersComponent
// },
//   {
//     path: 'dashboard',
//     component: DashboardComponent,
//     canActivate: [authGuard]
//   },
//   {
//     path: '', redirectTo: 'dashboard', pathMatch: 'full'
//   }
  
// ];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { authGuard } from './guards/auth.guard';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ManageUsersComponent } from './manage-users/manage-users.component';
import { AddUserComponent } from './add-user/add-user.component';  // Import AddUserComponent
import { UserDetailsComponent } from './user-details/user-details.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'forgot-password',
    component: ForgotPasswordComponent
  },
  {
    path: 'reset-password',
    component: ResetPasswordComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'manage-users',
    component: ManageUsersComponent,
    canActivate: [authGuard]
  },
  {
    path: 'add-user',
    component: AddUserComponent,  // Add route for AddUserComponent
    canActivate: [authGuard]  // Protect with authGuard if necessary
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [authGuard]
  },
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  { path: '', redirectTo: '/add-user', pathMatch: 'full' },
  { path: '', redirectTo: '/manage-user', pathMatch: 'full' },
  { path: 'user-details', component: UserDetailsComponent },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
