import { Component, OnInit } from '@angular/core';
import {VinilsService} from "../../../services/vinils.service";
import {BuyVinilService} from "../../../services/buy-vinil.service";
import {Observable} from "rxjs";


@Component({
  selector: 'app-vinil',
  templateUrl: './vinil.component.html',
  styleUrls: ['./vinil.component.css']

})
export class VinilComponent implements OnInit {

  vinilsData: any;
  token;
  isAdmin: boolean;
  totalPrice: number = 0;
  countProducts: number = 0;
  infoBuyVinyls: Array<number>;


  constructor(private vinilsService: VinilsService, private buyVinylService: BuyVinilService) {
  }

  ngOnInit(): void {
    this.vinilsService.getVinils()
      .subscribe(data => {
        this.vinilsData = data;
        this.vinilsData = this.vinilsData.games;
        console.log(this.vinilsData);
      })

    this.token = this.vinilsService.userIsLog();
    this.isAdmin = this.vinilsService.isAdmin();

  }

  addProductToCard(vinilPrice){
    this.buyVinylService.addProductToCard(vinilPrice)
}

}




