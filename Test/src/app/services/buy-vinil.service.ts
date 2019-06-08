import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BuyVinilService {

  vinylsData: Array<number>;
  data: Array<any>;


  constructor() { }

  calcCountAndPriceVinyls(infoBuyVinyl){
    this.vinylsData = infoBuyVinyl;
    //console.log(this.vinylsData);


  }

  getData(){
     this.data = this.vinylsData;
     return this.data;
  }

  isClicked(){

  }
}
