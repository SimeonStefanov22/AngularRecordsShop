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
import { ListUsersComponent } from './list-users/list-users.component';
import {ListUsersService} from "../services/list-users.service";
import { DeleteUserComponent } from './delete-user/delete-user.component';

@NgModule({
  declarations: [CreateVinilComponent, UpdateVinilComponent, DeleteVinilComponent, ListUsersComponent, DeleteUserComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,

  ],
  exports: [
    CreateVinilComponent,
    UpdateVinilComponent,
    DeleteVinilComponent,
    ListUsersComponent,
    DeleteUserComponent
  ],
  providers: [
    CreateVinilService,
    UpdateVinilService,
    DeleteVinylService,
    ListUsersService,
    DeleteVinylService
  ]
})
export class AdminModule { }
