import { Component, OnInit } from '@angular/core';
import {WelcomeService} from "../welcome.service";

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  user;
  constructor(private welcomeService: WelcomeService) {}

  ngOnInit() {
     this.user = this.welcomeService.welcomeUser();
  }

}
