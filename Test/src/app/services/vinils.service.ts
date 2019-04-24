import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class VinilsService {

  constructor(private httpClient: HttpClient) { }
  admin: string;
  token: string;
  getVinils(){
    const url = "http://localhost:9999/feed/games";
    return this.httpClient.get(url);
  }

  userIsLog(){
    return this.token = localStorage.getItem('token');
  }

  isAdmin(){
    this.admin = localStorage.getItem('userId');
    if(this.admin === "5c8c0be3db4c1e2264fe894e"){
      return true;
    }

  }
}
