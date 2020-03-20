import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { FormateurComponent } from './Components/formateur/formateur.component';
import { TaskComponent } from './Components/task/task.component';
import { LoginComponent } from './Components/login/login.component';
import { DeposerComponent } from './Components/deposer/deposer.component';
import { FilesFormateurComponent } from './Components/deposer/files-formateur/files-formateur.component';
import { GenerateLoginPassComponent } from './Components/deposer/generate-login-pass/generate-login-pass.component';


const routes: Routes = [
  {path:"",redirectTo:'home',pathMatch:'full'},
  {path:"home",component:HomeComponent},
  {path:'formateur',component:FormateurComponent},
  {path:'task',component:TaskComponent},
  {path:'login',component:LoginComponent},
  //***********************Routes Li dar Bissii***********************************
  { path:'deposer',component:DeposerComponent },
  { path:'depotFiles',component:FilesFormateurComponent },
  { path:'autoGenerate',component:GenerateLoginPassComponent }
  //***************************************************************************
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
