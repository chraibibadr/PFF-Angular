import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-files-formateur',
  templateUrl: './files-formateur.component.html',
  styleUrls: ['./files-formateur.component.css']
})
export class FilesFormateurComponent implements OnInit {

  touched ;

  constructor(private router : Router) { }

  ngOnInit() {
  }
//*******************************Methode Generer Login Password Automatiquement ***************************
  generer(e:NgForm){
    console.log(e);
    if(e.untouched)
      this.touched = false;
    else
      this.touched = true;
    if(e.valid)
      this.router.navigateByUrl("autoGenerate");
    else
      alert('Merci de Remplir tous les Informations Pour Confirmer Votre Dossier !!');
  }

  back(){
    this.router.navigateByUrl("deposer");
  }
//************************************************BISSI***********************************************

}
