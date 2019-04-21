import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class DeleteVinylService {

  constructor(private httpClient: HttpClient) { }

  getVinil(id){
    const url = "http://localhost:9999/feed/games/" + id;
    return this.httpClient.get(url);
  }

  delete(id){
    const url = "http://localhost:9999/feed/games/" + id;
    return this.httpClient.delete(url);
  }
}
