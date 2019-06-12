import { Component, OnInit } from '@angular/core';
import {BuyVinilService} from "../../services/buy-vinil.service";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  totalPrice: number = 0;
  countVinyls: number = 0;

  constructor(private buyVinilService: BuyVinilService) {}

  ngOnInit() {

  }

  ngDoCheck(){
    this.totalPrice = this.buyVinilService.totalPrice;
    this.countVinyls = this.buyVinilService.countProducts;
  }


}
