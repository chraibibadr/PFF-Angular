import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Formateur } from 'src/app/Models/Formateur';
import { FormateurService } from 'src/app/Services/Formateur/formateur.service';

@Component({
  selector: 'app-formateur',
  templateUrl: './formateur.component.html',
  styleUrls: ['./formateur.component.css']
})
export class FormateurComponent implements OnInit {


  constructor(private router:  Router,
                      private formateurService : FormateurService) { }

  ngOnInit() {
  }

  ajouter(e){
    e.preventDefault();
    const target = e.target;
    const nom = target.querySelector('#nomF').value;
    const prenom = target.querySelector('#prenomF').value;
    const dateN = target.querySelector('#dateF').value;
    const telephone = target.querySelector('#telF').value;
    const reb = target.querySelector('#rebF').value;
    // console.log(nom);
    // console.log(prenom);
    // console.log(dateN);
    // console.log(telephone);
    // console.log(reb);
    const newFormateur = new Formateur(nom,prenom,dateN,telephone,reb);
    this.formateurService.addFormateur(newFormateur).subscribe((data)=>{
      console.log("bien added");
    });

  }
}
