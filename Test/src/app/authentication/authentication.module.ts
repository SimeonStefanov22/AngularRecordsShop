import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import {RegistrationService} from "./registration.service";
import { LoginFormComponent } from './login-form/login-form.component';
import {LoginService} from "./login.service";
import {RouterModule} from "@angular/router";

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
    LoginService
  ]
})
export class AuthenticationModule { }
