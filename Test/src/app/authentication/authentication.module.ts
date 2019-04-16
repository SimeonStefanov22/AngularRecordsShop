import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import {RegistrationService} from "./registration.service";

@NgModule({
  declarations: [RegistrationFormComponent],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule
  ],
  exports:[
    RegistrationFormComponent
  ],
  providers:[
    RegistrationService,

  ]
})
export class AuthenticationModule { }
