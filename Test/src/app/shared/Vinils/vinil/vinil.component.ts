import { Component, OnInit } from '@angular/core';
import {VinilsService} from "../../../services/vinils.service";
import {Observable} from "rxjs";


@Component({
  selector: 'app-vinil',
  templateUrl: './vinil.component.html',
  styleUrls: ['./vinil.component.css']

})
export class VinilComponent implements OnInit {

  vinilsData: any;
  token;

  constructor(  private vinilsService: VinilsService) {}
  admin: string;
  ngOnInit():void {
    this.vinilsService.getVinils()
      .subscribe(data => {
        this.vinilsData = data;
        this.vinilsData = this.vinilsData.games;
        console.log(this.vinilsData);
      })

    this.token = this.vinilsService.userIsLog()
  }
  isAdmin(){
    this.admin = localStorage.getItem('userId');
    if(this.admin === "5c8c0be3db4c1e2264fe894e"){
      return true;
    }
  }

  //getId(id){
  //  return id;//
  //}


}
