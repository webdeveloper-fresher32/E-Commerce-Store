import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UserauthService } from '../services/userauth.service';

export const authgardprotectedGuard: CanActivateFn = (route, state) => {
  const authService = inject(UserauthService);
  const router = inject(Router);

  if (authService.isAuthenticated()) {
    return true;
  } else {
    router.navigate(['/login']);
    return false;
  }
};
