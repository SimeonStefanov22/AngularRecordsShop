import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainComponent} from "./shared/main/main.component";
import {RegistrationFormComponent} from "./authentication/registration-form/registration-form.component";
import {LoginFormComponent} from "./authentication/login-form/login-form.component";
import {WelcomeComponent} from "./shared/welcome/welcome.component";
import {CreateVinilComponent} from "./admin/create-vinil/create-vinil.component";
import {AuthGardGuard} from "./authentication/gards/auth-gard.guard";
import {UpdateVinilComponent} from "./admin/update-vinil/update-vinil.component";



const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'home', component: MainComponent},
  { path: 'home', component: WelcomeComponent},
  { path: 'registration', component: RegistrationFormComponent},
  { path: 'login', component: LoginFormComponent},
  { path: 'create', component: CreateVinilComponent, canActivate: [AuthGardGuard]},
  { path: 'update', component: UpdateVinilComponent, canActivate: [AuthGardGuard]},
  { path: "", redirectTo: "home", pathMatch: "full"}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
