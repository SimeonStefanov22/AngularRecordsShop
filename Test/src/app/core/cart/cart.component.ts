import { Component, OnInit } from '@angular/core';
import {BuyVinilService} from "../../services/buy-vinil.service";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  //vinylData: Array<number>;
  vinylData: Array<number> = this.calcDataVinyls.getData();
  countVinyls: number = 0;
  totalPrice: number = 0;


  constructor(private calcDataVinyls: BuyVinilService) {

  }

  ngOnInit() {

  }


}
