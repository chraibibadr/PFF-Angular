import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
import { FormsModule } from '@angular/forms';
import { FormateurComponent } from './Components/formateur/formateur.component';
import { TaskComponent } from './Components/task/task.component';
import { LoginComponent } from './Components/login/login.component';
import { DeposerComponent } from './Components/deposer/deposer.component';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { AdminHomeComponent } from './Components/admin-home/admin-home.component';
import { FilesFormateurComponent } from './Components/deposer/files-formateur/files-formateur.component';
import { GenerateLoginPassComponent } from './Components/deposer/generate-login-pass/generate-login-pass.component';
import { GuestHomeComponent } from './Components/guest-home/guest-home.component';
import { NouveauDossierComponent } from './Components/admin-home/nouveau-dossier/nouveau-dossier.component';
import { ConsultVacatureComponent } from './Components/admin-home/consult-vacature/consult-vacature.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FormateurComponent,
    TaskComponent,
    LoginComponent,
    DeposerComponent,
    HeaderComponent,
    FooterComponent,
    AdminHomeComponent,
    FilesFormateurComponent,
    GenerateLoginPassComponent,
    GuestHomeComponent,
    GuestHomeComponent,
    NouveauDossierComponent,
    ConsultVacatureComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
