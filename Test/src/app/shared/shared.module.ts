//Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AppRoutingModule} from "../app-routing.module";
//Components
import {MainComponent} from "./main/main.component";
import {VinilComponent} from "./Vinils/vinil/vinil.component";
import { WelcomeComponent } from './welcome/welcome.component';
//Services
import {WelcomeService} from "../services/welcome.service";
import {VinilsService} from "../services/vinils.service";


@NgModule({
  declarations: [
    MainComponent,
    VinilComponent,
    WelcomeComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports: [
    MainComponent,
    VinilComponent,
    WelcomeComponent
  ],
  providers: [
    WelcomeService,
    VinilsService
  ]
})
export class SharedModule { }
