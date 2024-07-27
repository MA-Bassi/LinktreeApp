import { Routes } from '@angular/router';
import {AuthenticationPageComponent} from "./pages/authentication-page/authentication-page.component";
import {DashboardPageComponent} from "./pages/dashboard-page/dashboard-page.component";
import {AuthenticationGuard} from "./guards/authentication.guard";
import {DashLinksPageComponent} from "./pages/dash-links-page/dash-links-page.component";

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
    canActivate: [AuthenticationGuard],
    children: [
        {
            path: 'links',
            component: DashLinksPageComponent,
        },
      {
        path: '',
        redirectTo: '/dash/links',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/dash',
    pathMatch: 'full'
  }
];
