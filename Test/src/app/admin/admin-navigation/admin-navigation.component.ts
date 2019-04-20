import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-admin-navigation',
  templateUrl: './admin-navigation.component.html',
  styleUrls: ['./admin-navigation.component.css']
})
export class AdminNavigationComponent implements OnInit {
  admin: string;
  constructor() { }

  ngOnInit() {
  }

  isAdmin(){
    this.admin = localStorage.getItem('userId');
    if(this.admin === "5c8c0be3db4c1e2264fe894e"){
      return true;
    }
  }

}
