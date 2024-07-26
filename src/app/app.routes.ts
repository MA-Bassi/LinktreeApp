import { Routes } from '@angular/router';
import {AuthenticationPageComponent} from "./pages/authentication-page/authentication-page.component";
import {DashboardPageComponent} from "./pages/dashboard-page/dashboard-page.component";
import {AuthenticationGuard} from "./guards/authentication.guard";

export const routes: Routes = [
  {
    title: 'Authentication',
    path: 'auth',
    component: AuthenticationPageComponent
  },
  {
    title: 'Dashboard',
    path: 'dash',
    component: DashboardPageComponent,
    canActivate: [AuthenticationGuard]
  },
  {
    path: '',
    redirectTo: '/dash',
    pathMatch: 'full'
  }
];
