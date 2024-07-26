import {Injectable} from '@angular/core';
import {USERS} from "../constants/users.constant";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private router: Router) {
  }

  authenticate(email: string, password: string) {
    const user = USERS.find(user => user.email === email);
    if (user && user.password === password) {
      localStorage.setItem('user', JSON.stringify(user));
      return user;
    }
    return null;
  }

  logout() {
    localStorage.removeItem('user');
    this.router.navigateByUrl('/auth').finally(() => {});
  }
}
