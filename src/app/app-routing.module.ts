import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { FormateurComponent } from './Components/formateur/formateur.component';
import { TaskComponent } from './Components/task/task.component';
import { LoginComponent } from './Components/login/login.component';
import { DeposerComponent } from './Components/deposer/deposer.component';

import { FilesFormateurComponent } from './Components/deposer/files-formateur/files-formateur.component';
import { GenerateLoginPassComponent } from './Components/deposer/generate-login-pass/generate-login-pass.component';

import { AdminHomeComponent } from './Components/admin-home/admin-home.component';

import { GuestHomeComponent } from './Components/guest-home/guest-home.component';
import { NouveauDossierComponent } from './Components/admin-home/nouveau-dossier/nouveau-dossier.component';

const routes: Routes = [
  //********************* Admin Routes *******************************************
  {path:"",redirectTo:'home',pathMatch:'full'},
  {path:"home",component:HomeComponent},
  {path:'formateur',component:FormateurComponent},
  {path:'task',component:TaskComponent},
  {path:'login',component:LoginComponent},
  {path:'guest-home',component:GuestHomeComponent},

  //***********************Routes Li dar Bissii***********************************
  { path:'deposer',component:DeposerComponent },
  { path:'depotFiles',component:FilesFormateurComponent },
  { path:'autoGenerate',component:GenerateLoginPassComponent },

  //**************************MAINE************************************
  {path:'admin-home',component:AdminHomeComponent},
  {path:'nouveau-dossier',component:NouveauDossierComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
