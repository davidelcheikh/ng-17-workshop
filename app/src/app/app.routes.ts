import { CanActivateFn, Routes } from '@angular/router';
import { SignalsComponent } from '../signals/signals.component';
import { UserService } from './services/user.service';
import { inject } from '@angular/core';
import { ControlFlowsComponent } from '../control-flows/control-flows.component';
import { DeferrableViewsComponent } from '../deferrable-views/deferrable-views.component';
import { SignalStoreComponent } from '../signal-store/signal-store.component';
import { LuxonVsMomentComponent } from '../luxon-vs-moment/luxon-vs-moment.component';
import { NgOptimizedComponent } from '../ng-optimized/ng-optimized.component';

export const appRoutes: Routes = [
  {
    path: 'signals',
    component: SignalsComponent,
    canActivate: [authenticationGuard()],
    canMatch: [() => inject(UserService).isLoggedIn()],
  },
  {
    path: 'signals',
    component: SignalsComponent,
    canMatch: [() => !inject(UserService).isLoggedIn()],
  },
  {
    path: 'control-flows',
    component: ControlFlowsComponent,
  },
  {
    path: 'deferrable',
    component: DeferrableViewsComponent,
  },
  {
    path: 'store',
    component: SignalStoreComponent,
  },
  {
    path: 'date-time',
    component: LuxonVsMomentComponent,
  },
  {
    path: 'optimised-img',
    component: NgOptimizedComponent,
  },
];

// If complex can be re-located to separate function
// If simple enough, can be done inline
export function authenticationGuard(): CanActivateFn {
  return () => {
    const userService: UserService = inject(UserService);
    return userService.hasAccess();
  };
}
