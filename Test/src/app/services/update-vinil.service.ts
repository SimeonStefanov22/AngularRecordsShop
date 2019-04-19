import { Injectable } from '@angular/core';
import {CreateVinilModel} from "../models/createVinilModel";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UpdateVinilService {

  model: CreateVinilModel

  constructor(private httpClient: HttpClient) { }

  postData(data){

    this.model =
      {
        title: data.title,
        description: data.description,
        imageUrl: data.imageUrl,
        price: data.price
      }

    const url = 'http://localhost:9999/feed/games/' //+ id;
    return this.httpClient.post(url, this.model, {headers: {'Content-Type': 'application/json'}})

  }
}
