import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-files-formateur',
  templateUrl: './files-formateur.component.html',
  styleUrls: ['./files-formateur.component.css']
})
export class FilesFormateurComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit() {
  }
//*******************************Methode Generer Login Password Automatiquement ***************************
  generer(e){
    console.log(e);
    if(e.valid)
      this.router.navigateByUrl("autoGenerate");
    else
      alert('Merci de Remplir tous les Informations Pour Confirmer Votre Dossier !!');
  }
//************************************************BISSI***********************************************

}
