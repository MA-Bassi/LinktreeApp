import { Component } from '@angular/core';
import {User} from "../../constants/users.constant";
import {TextComponent} from "../../atoms/text/text.component";
import {MatButtonModule} from "@angular/material/button";

@Component({
  selector: 'app-dash-link-url-section',
  standalone: true,
  imports: [
    TextComponent,
    MatButtonModule
  ],
  templateUrl: './dash-link-url-section.component.html',
  styleUrl: './dash-link-url-section.component.scss'
})
export class DashLinkUrlSectionComponent {

  currentUser: User = JSON.parse(localStorage.getItem('user') ?? '');

  get URL() {
    return `http://your-url/${this.currentUser.username}`;
  }

  onCopy() {
    navigator.clipboard.writeText(this.URL).finally(() => {});
  }

}
