import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {CoreModule} from "./core/core.module";
import {AuthenticationModule} from "./authentication/authentication.module";
import {SharedModule} from "./shared/shared.module";
import {AdminModule} from "./admin/admin.module";
//Services
import {VinilsService} from "./services/vinils.service";
import {RegistrationService} from "./services/registration.service";
import {LoginService} from "./services/login.service";
import {CreateVinilService} from "./services/create-vinil.service";
import {RouterModule, Routes} from "@angular/router";
import {AuthGardGuard} from "./authentication/gards/auth-gard.guard";
import {UpdateVinilService} from "./services/update-vinil.service";
import {DeleteVinylService} from "./services/delete-vinyl.service";
import {ListUsersService} from "./services/list-users.service";
import {DeleteUserService} from "./services/delete-user.service";



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
    SharedModule,
    AdminModule,
    RouterModule
  ],
  providers: [
    VinilsService,
    RegistrationService,
    LoginService,
    CreateVinilService,
    UpdateVinilService,
    DeleteVinylService,
    AuthGardGuard,
    ListUsersService,
    DeleteUserService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
