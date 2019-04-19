import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from "@angular/forms";
import { CreateVinilComponent } from './create-vinil/create-vinil.component';
import {CreateVinilService} from "../services/create-vinil.service";
import { AdminNavigationComponent } from './admin-navigation/admin-navigation.component';
import {RouterModule} from "@angular/router";
import { UpdateVinilComponent } from './update-vinil/update-vinil.component';
import {UpdateVinilService} from "../services/update-vinil.service";

@NgModule({
  declarations: [CreateVinilComponent, AdminNavigationComponent, UpdateVinilComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  exports: [
    CreateVinilComponent,
    AdminNavigationComponent,
    UpdateVinilComponent
  ],
  providers: [
    CreateVinilService,
    UpdateVinilService
  ]
})
export class AdminModule { }
