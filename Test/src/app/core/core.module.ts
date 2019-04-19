import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";

import {NavigationComponent} from "./navigation/navigation.component";
import {FooterComponent} from "./footer/footer.component";
import {HeaderComponent} from "./header/header.component";


@NgModule({
  declarations: [
    NavigationComponent,
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule

  ],
  exports: [
    NavigationComponent,
    FooterComponent,
    HeaderComponent
  ]
})
export class CoreModule { }
