import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home';
import { CustomerDashboardComponent } from './pages/customer-dashboard/customer-dashboard';
import { ProfileComponent } from './pages/profile/profile';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'dashboard', component: CustomerDashboardComponent },
  { path: 'profile', component: ProfileComponent }
];