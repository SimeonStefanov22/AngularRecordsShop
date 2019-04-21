import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from "@angular/forms";
import { CreateVinilComponent } from './create-vinil/create-vinil.component';
import {CreateVinilService} from "../services/create-vinil.service";
import { RouterModule} from "@angular/router";
import { UpdateVinilComponent } from './update-vinil/update-vinil.component';
import {UpdateVinilService} from "../services/update-vinil.service";
import {DeleteVinylService} from "../services/delete-vinyl.service";
import { DeleteVinilComponent } from './delete-vinil/delete-vinil.component';

@NgModule({
  declarations: [CreateVinilComponent, UpdateVinilComponent, DeleteVinilComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,

  ],
  exports: [
    CreateVinilComponent,
    UpdateVinilComponent,
    DeleteVinilComponent
  ],
  providers: [
    CreateVinilService,
    UpdateVinilService,
    DeleteVinylService
  ]
})
export class AdminModule { }
