import { Component } from '@angular/core';
import {DashSideNavContainerComponent} from "../../organisms/dash-side-nav-container/dash-side-nav-container.component";
import {RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-dashboard-page',
  standalone: true,
  imports: [
    DashSideNavContainerComponent,
    RouterOutlet
  ],
  templateUrl: './dashboard-page.component.html',
  styleUrl: './dashboard-page.component.scss'
})
export class DashboardPageComponent {

}
