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



  constructor(private router: Router) {}

  ngOnInit() {

  }

logout(){
    localStorage.clear();
    this.router.navigateByUrl("")
}


}

