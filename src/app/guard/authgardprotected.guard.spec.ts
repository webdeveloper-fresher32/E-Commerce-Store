import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { authgardprotectedGuard } from './authgardprotected.guard';

describe('authgardprotectedGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => authgardprotectedGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
