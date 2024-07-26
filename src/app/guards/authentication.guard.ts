import {CanActivateFn, Router} from '@angular/router';
import {inject} from "@angular/core";

export const AuthenticationGuard: CanActivateFn = (route, state) => {

  const user = localStorage.getItem('user');
  if(user !== null) {
    return true;
  }
  const router = inject(Router);
  router.navigateByUrl('/auth').finally(() => {});
  return false;
};
