import { Injectable } from '@angular/core';
import {LoginModel} from "./loginModel";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  model: LoginModel;

  constructor(private httpClient: HttpClient) { }

  postData(data){

    this.model = {username: data.username, password: data.hashedPassword}

    const url = 'http://localhost:9999/auth/signin';
    return this.httpClient.post(url, this.model, {headers: {'Content-Type': 'application/json'}})

  }
}
