//Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";

//Components
import {NavigationComponent} from "./navigation/navigation.component";
import {FooterComponent} from "./footer/footer.component";
import {HeaderComponent} from "./header/header.component";
import {BuyVinilService} from "../services/buy-vinil.service";
import { CartComponent } from './cart/cart.component';


@NgModule({
  declarations: [
    NavigationComponent,
    FooterComponent,
    HeaderComponent,
    CartComponent,

  ],
  imports: [
    CommonModule,
    RouterModule,


  ],
  exports: [
    NavigationComponent,
    FooterComponent,
    HeaderComponent,
    CartComponent

  ],
  providers: [
    BuyVinilService
  ]
})
export class CoreModule { }
