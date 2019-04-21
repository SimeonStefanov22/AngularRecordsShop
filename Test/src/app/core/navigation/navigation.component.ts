import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CommonModule} from "@angular/common";
import {Router} from "@angular/router";

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  admin: string;
  token: string;

  constructor(private router: Router) {}

  ngOnInit() {

  }

logout(){
    localStorage.clear();
    this.router.navigateByUrl("")
}
  isAdmin(){
    this.admin = localStorage.getItem('userId');
    if(this.admin === "5c8c0be3db4c1e2264fe894e"){
      return true;
    }
  }
  isToken(){
    return this.token = localStorage.getItem('token');
  }


}

