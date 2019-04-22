import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class DeleteUserService {

  constructor(private httpClient: HttpClient) { }

  getUser(id){
    const url = "http://localhost:9999/feed/users/" + id;
    return this.httpClient.get(url);
  }
  delete(id){
    const url = "http://localhost:9999/feed/users/" + id;
    return this.httpClient.delete(url);
  }
}
