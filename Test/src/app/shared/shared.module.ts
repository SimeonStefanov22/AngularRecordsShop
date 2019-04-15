import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MainComponent} from "./main/main.component";
import {VinilComponent} from "./Vinils/vinil/vinil.component";
import {AppRoutingModule} from "../app-routing.module";

@NgModule({
  declarations: [
    MainComponent,
    VinilComponent,


  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports: [
    MainComponent,
    VinilComponent,

  ]
})
export class SharedModule { }
