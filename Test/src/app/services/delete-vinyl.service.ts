import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class DeleteVinylService {

  constructor(private httpClient: HttpClient) { }

  getVinils(){
    const url = "http://localhost:9999/feed/games" //+ id;
    return this.httpClient.get(url);
  }
}
