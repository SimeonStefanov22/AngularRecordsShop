import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ListUsersService {

  constructor(private httpClient: HttpClient) { }

  getUsers(){
    const url = "http://localhost:9999/feed/users";
    return this.httpClient.get(url);
  }


}
