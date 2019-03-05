import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})

export class AuthGuardService implements CanActivate {

  constructor(private auth: AuthService) { }

  canActivate(next: ActivatedRouteSnapshot, status: RouterStateSnapshot) {

    console.log(next);

    (this.auth.isAuthenticated()) ? return true : return false;

    if (this.auth.isAuthenticated()) {
      console.log('"pasó"');
      return true;
    }
    return false;
  }
}
