import { Injectable } from '@angular/core';
import { CanActivate,Router, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGardGuard implements CanActivate {
  admin: string = "";

  constructor(private route: Router){}

  canActivate(){

    this.admin = localStorage.getItem('userId');
    if(this.admin === "5c8c0be3db4c1e2264fe894e"){
      return true;
    }else{
      this.route.navigateByUrl('home');
      return false;


    }




  }



}
