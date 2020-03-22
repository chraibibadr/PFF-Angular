import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { FormateurComponent } from './Components/formateur/formateur.component';
import { ContactComponent } from './Components/contact/contact.component';
import { LoginComponent } from './Components/login/login.component';
import { DeposerComponent } from './Components/deposer/deposer.component';
import { FilesFormateurComponent } from './Components/deposer/files-formateur/files-formateur.component';
import { GenerateLoginPassComponent } from './Components/deposer/generate-login-pass/generate-login-pass.component';
import { AdminHomeComponent } from './Components/admin-home/admin-home.component';
import { GuestHomeComponent } from './Components/guest-home/guest-home.component';
import { NouveauDossierComponent } from './Components/admin-home/nouveau-dossier/nouveau-dossier.component';
import { ConsultVacatureComponent } from './Components/admin-home/consult-vacature/consult-vacature.component';
<<<<<<< HEAD
import { DelailsDossierComponent } from './Components/admin-home/delails-dossier/delails-dossier.component';
=======
import { TextBookComponent } from './Components/formateur/text-book/text-book.component';
import { GestionDossierComponent } from './Components/guest-home/gestion-dossier/gestion-dossier.component';
>>>>>>> 46d4778264279b516a396541d33f483d86e9ba7a

const routes: Routes = [

  {path:"",redirectTo:'home',pathMatch:'full'},
  {path:"home",component:HomeComponent},
  {path:'formateur',component:FormateurComponent},
  {path:'contact',component:ContactComponent},
  
  //******************************* Bader's Routes *************************/
  {path:'login',component:LoginComponent},
  {path:'guest-home',component:GuestHomeComponent},
  {path:'guest/gestion-dossier',component:GestionDossierComponent},


  //***********************Routes Li dar Bissi***********************************
  { path:'deposer',component:DeposerComponent },
  { path:'depotFiles',component:FilesFormateurComponent },
  { path:'autoGenerate',component:GenerateLoginPassComponent },

  //**************************MAINE************************************
  {path:'admin-home',component:AdminHomeComponent},
  {path:'nouveau-dossier',component:NouveauDossierComponent},
  {path:'consult-vacature',component:ConsultVacatureComponent},
<<<<<<< HEAD
  {path:'delails-dossier',component:DelailsDossierComponent},
=======

  //**************************  Ayoub  ************************************
  {path:'cahier-text',component:TextBookComponent},
>>>>>>> 46d4778264279b516a396541d33f483d86e9ba7a
  
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
