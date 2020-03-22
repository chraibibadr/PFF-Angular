import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
import { FormsModule } from '@angular/forms';
import { FormateurComponent } from './Components/formateur/formateur.component';
import { LoginComponent } from './Components/login/login.component';
import { DeposerComponent } from './Components/deposer/deposer.component';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { AdminHomeComponent } from './Components/admin-home/admin-home.component';
import { BackgroundComponent } from './Components/header/background/background.component';
import { FilesFormateurComponent } from './Components/deposer/files-formateur/files-formateur.component';
import { GenerateLoginPassComponent } from './Components/deposer/generate-login-pass/generate-login-pass.component';
import { GuestHomeComponent } from './Components/guest-home/guest-home.component';
import { NouveauDossierComponent } from './Components/admin-home/nouveau-dossier/nouveau-dossier.component';
import { ConsultVacatureComponent } from './Components/admin-home/consult-vacature/consult-vacature.component';
import { ContactComponent } from './Components/contact/contact.component';
import { DelailsDossierComponent } from './Components/admin-home/delails-dossier/delails-dossier.component';
import { TextBookComponent } from './Components/formateur/text-book/text-book.component';
import { GestionDossierComponent } from './Components/guest-home/gestion-dossier/gestion-dossier.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FormateurComponent,
    LoginComponent,
    DeposerComponent,
    HeaderComponent,
    FooterComponent,
    AdminHomeComponent,
    BackgroundComponent,
    FilesFormateurComponent,
    GenerateLoginPassComponent,
    GuestHomeComponent,
    NouveauDossierComponent,
    ConsultVacatureComponent,
    ContactComponent,
    DelailsDossierComponent,
    TextBookComponent,
    GestionDossierComponent,
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
