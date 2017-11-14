import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { PageNotFoundComponent } from "../not-found/not-found.component";
// import { AuthGuard } from "./auth.guard";
import { LoginComponent } from '../login/login.component';
// import { ProfileComponent } from './profile/profile.component';
// import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
//   {
//     path: 'signup',
//     component: SignupComponent
//   },
//   {
//     path: 'profile',
//     component: ProfileComponent,
//     canActivate: [AuthGuard]
//   },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
