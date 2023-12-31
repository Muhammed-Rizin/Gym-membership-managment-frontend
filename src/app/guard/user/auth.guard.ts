import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private _router : Router
  ){}
  canActivate(){
    const token = localStorage.getItem('userJwt');
    if (token) {
      return true;
    } else {
      this._router.navigate(['/']);
      return false;
    }
  }
}
