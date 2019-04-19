import { Component, OnInit } from '@angular/core';
import {IHeader} from "../../models/header";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
products: Array<IHeader>;
  constructor() {
    this.products = [{countProducts: 3, totalPrice: 56}];
  }

  ngOnInit() {
  }

}
