import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class VinilsService {

  constructor(private httpClient: HttpClient) { }

  token;
  getVinils(){
    const url = "http://localhost:9999/feed/games";
    return this.httpClient.get(url);
  }

  userIsLog(){
    return this.token = localStorage.getItem('token');
  }
}
