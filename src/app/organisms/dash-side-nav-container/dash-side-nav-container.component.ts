import {Component, OnDestroy} from '@angular/core';
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatListModule} from "@angular/material/list";
import {MediaMatcher} from "@angular/cdk/layout";
import {Router} from "@angular/router";
import {User} from "../../constants/users.constant";
import {AuthenticationService} from "../../services/authentication.service";


interface SideNavLink {
  title: string;
  url: string;
  icon: string;
}


@Component({
  selector: 'app-dash-side-nav-container',
  standalone: true,
  imports: [MatToolbarModule, MatButtonModule, MatIconModule, MatSidenavModule, MatListModule],
  templateUrl: './dash-side-nav-container.component.html',
  styleUrl: './dash-side-nav-container.component.scss'
})
export class DashSideNavContainerComponent implements OnDestroy {
  mobileQuery: MediaQueryList;
  routes: SideNavLink[] = [
    {
      title: 'Links',
      url: '/dash/links',
      icon: 'link'
    }
  ];
  currentUrl: string;
  currentUser: User = JSON.parse(localStorage.getItem('user') ?? '');

  private _mobileQueryListener: () => void = () => {
  };

  constructor(media: MediaMatcher, router: Router, private authService: AuthenticationService) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this.mobileQuery.addEventListener('change', this._mobileQueryListener);
    this.currentUrl = router.url;
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeEventListener('change', this._mobileQueryListener);
  }

  onLogout(): void {
    this.authService.logout();
  }

}
