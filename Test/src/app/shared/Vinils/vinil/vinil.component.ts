import { Component, OnInit } from '@angular/core';
import {VinilsService} from "../vinils.service";
import {Observable} from "rxjs";


@Component({
  selector: 'app-vinil',
  templateUrl: './vinil.component.html',
  styleUrls: ['./vinil.component.css']

})
export class VinilComponent implements OnInit {

  isShown: boolean = false;
  vinilsData: any;




  constructor(  private vinilsService: VinilsService) {}


  ngOnInit():void {
    this.vinilsService.getVinils()
      .subscribe(data => {
        this.vinilsData = data;
        this.vinilsData = this.vinilsData.games;
        console.log(this.vinilsData);
      })


  }




}
