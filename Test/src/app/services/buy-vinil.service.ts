import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BuyVinilService {

 totalPrice: number = 0;
 countProducts: number = 0;
 infoBuyVinyls: Array<number>;


  constructor() { }

  addProductToCard(vinylPrice) {
    this.totalPrice += Number(vinylPrice);
    this.countProducts++;
    this.infoBuyVinyls = [this. countProducts, this.totalPrice]
    console.log("click");
    console.log(this.totalPrice);
    console.log(this.countProducts);




  }



}
