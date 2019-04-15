import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {CoreModule} from "./core/core.module";
import {AuthenticationModule} from "./authentication/authentication.module";
import {SharedModule} from "./shared/shared.module";
//Services
import {VinilsService} from "./shared/Vinils/vinils.service";
import {RegistrationService} from "./authentication/registration.service";


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    CoreModule,
    AuthenticationModule,
    SharedModule
  ],
  providers: [
    VinilsService,
    RegistrationService,

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
