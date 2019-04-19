import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from "@angular/forms";
import { CreateVinilComponent } from './create-vinil/create-vinil.component';
import {CreateVinilService} from "./create-vinil.service";
import { AdminNavigationComponent } from './admin-navigation/admin-navigation.component';
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [CreateVinilComponent, AdminNavigationComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  exports: [
    CreateVinilComponent,
    AdminNavigationComponent
  ],
  providers: [
    CreateVinilService
  ]
})
export class AdminModule { }
