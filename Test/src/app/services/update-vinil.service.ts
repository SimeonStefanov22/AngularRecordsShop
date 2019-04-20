import {Injectable} from '@angular/core';
import {CreateVinilModel} from "../models/createVinilModel";
import {HttpClient} from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class UpdateVinilService{

  model: CreateVinilModel;
  id: string;

  constructor(private httpClient: HttpClient,) { }

  postData(data, id){

    this.model =
      {
        title: data.title,
        description: data.description,
        imageUrl: data.imageUrl,
        price: data.price
      }

    console.log(id);

    const url = 'http://localhost:9999/feed/games/' + id;

    return this.httpClient.put(url, this.model, {headers: {'Content-Type': 'application/json'}})

  }
}
