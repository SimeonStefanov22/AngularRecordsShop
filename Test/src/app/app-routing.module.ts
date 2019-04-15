import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainComponent} from "./shared/main/main.component";
import {RegistrationFormComponent} from "./authentication/registration-form/registration-form.component";


const routes: Routes = [
  { path: '', component: MainComponent },
  {path: 'registration', component: RegistrationFormComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
