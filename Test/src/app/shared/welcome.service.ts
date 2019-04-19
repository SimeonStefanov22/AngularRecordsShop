import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WelcomeService {
  token: string = "";
  constructor() { }

  welcomeUser(){
    this.token = localStorage.getItem('token');
    if (this.token !== ""){
      const user = localStorage.getItem('username');
      console.log(user);
      return user;

    }
  }
}
