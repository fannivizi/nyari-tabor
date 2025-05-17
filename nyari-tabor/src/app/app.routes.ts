import { Routes } from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import {ActivitiesComponent} from './pages/activities/activities.component';
import {LoginComponent} from './pages/login/login.component';
import {RegComponent} from './pages/reg/reg.component';
import {SignupComponent} from './pages/signup/signup.component';
import {ProfileComponent} from './pages/profile/profile.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'activities', component: ActivitiesComponent },
  { path: 'login', component: LoginComponent },
  { path: 'reg', component: RegComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'profile', component: ProfileComponent },
  { path: '', component: HomeComponent},
  { path: '**', component: HomeComponent }
];
