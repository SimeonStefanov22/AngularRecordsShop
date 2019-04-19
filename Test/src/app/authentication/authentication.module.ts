import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import {RegistrationService} from "../services/registration.service";
import { LoginFormComponent } from './login-form/login-form.component';
import {LoginService} from "../services/login.service";
import {RouterModule} from "@angular/router";
import {AuthGardGuard} from "./gards/auth-gard.guard";

@NgModule({
  declarations: [RegistrationFormComponent, LoginFormComponent],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    RouterModule
  ],
  exports:[
    RegistrationFormComponent,
    LoginFormComponent
  ],
  providers:[
    RegistrationService,
    LoginService,
    AuthGardGuard
  ]
})
export class AuthenticationModule { }
