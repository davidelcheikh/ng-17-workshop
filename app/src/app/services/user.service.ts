import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class UserService {
  isLoggedIn() {
    return true;
  }

  hasAccess() {
    return true;
  }
}
