import {Component, signal} from '@angular/core';
import {TextComponent} from "../../atoms/text/text.component";
import {ImageComponent} from "../../atoms/image/image.component";
import {MatInputModule} from "@angular/material/input";
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {AuthenticationService} from "../../services/authentication.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-authentication-page',
  standalone: true,
  imports: [
    TextComponent,
    ImageComponent,
    ReactiveFormsModule,
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
  authenticationError = signal(false);
  authenticationForm: FormGroup = new FormGroup({
    email: new FormControl('', {validators: [Validators.required, Validators.email]}),
    password: new FormControl('', {validators: [Validators.required]}),
  });

  constructor(private authService: AuthenticationService, private router: Router) {
  }

  passwordFieldButtonClick(event: MouseEvent) {
    this.passwordFieldHidden.update(value => !value);
    event.stopPropagation();
  }

  onAuthenticate() {
    if (this.authenticationForm.valid) {
      this.authenticationError.set(false);
      // Perform authentication logic here
      const email = this.authenticationForm.value['email'];
      const password = this.authenticationForm.value['password'];
      const user = this.authService.authenticate(email, password);
      if(user == null) {
        this.authenticationError.set(true);
        return;
      }
      this.router.navigateByUrl('/dash').finally(() => {});
    }
  }
}
