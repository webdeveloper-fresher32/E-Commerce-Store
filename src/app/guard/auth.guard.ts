import { CanActivateFn, Router } from '@angular/router';
import { UserauthService } from '../services/userauth.service';
import { Inject, inject } from '@angular/core';



export const authGuard: CanActivateFn = (route, state) => {
  const authservive = inject(UserauthService);
  const router = Inject(Router);

  if (authservive.isAuthenticated()) {
    router.navigate(['products'])
    return false
  } else return true
};
