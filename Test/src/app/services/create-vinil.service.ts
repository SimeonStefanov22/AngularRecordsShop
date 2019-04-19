import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {CreateVinilModel} from "../models/createVinilModel";
import {NgForm} from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class CreateVinilService {

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

    const url = 'http://localhost:9999/feed/game/create';
    return this.httpClient.post(url, this.model, {headers: {'Content-Type': 'application/json'}})

  }
}
