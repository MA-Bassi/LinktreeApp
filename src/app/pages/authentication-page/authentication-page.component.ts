import {Component, signal} from '@angular/core';
import {TextComponent} from "../../atoms/text/text.component";
import {ImageComponent} from "../../atoms/image/image.component";
import {MatInputModule} from "@angular/material/input";
import {FormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";

@Component({
  selector: 'app-authentication-page',
  standalone: true,
  imports: [
    TextComponent,
    ImageComponent,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './authentication-page.component.html',
  styleUrl: './authentication-page.component.scss'
})
export class AuthenticationPageComponent {
  backgroundImageUrl: string = 'images/banner-login-desktop.png';
  backgroundImagePlaceholder: string = 'banner-login-desktop';
  errorText: string = 'Looks like this password\'s incorrect. Try again, or reset your password if you\'re having trouble!';
  passwordFieldHidden = signal(true);

  passwordFieldButtonClick(event: MouseEvent) {
    this.passwordFieldHidden.update(value => !value);
    event.stopPropagation();
  }
}
