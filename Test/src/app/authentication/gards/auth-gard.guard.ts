import { Injectable } from '@angular/core';
import { CanActivate,Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGardGuard implements CanActivate {
  admin: string = "";
  token: string;

  constructor(private route: Router){}

  canActivate(){

    this.token = localStorage.getItem('token');
    if(this.token){
      return true;
    }else{
      this.route.navigateByUrl('home');
      return false;
    }

  }



}
