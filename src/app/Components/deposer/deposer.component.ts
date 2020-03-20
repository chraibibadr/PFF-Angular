import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-deposer',
  templateUrl: './deposer.component.html',
  styleUrls: ['./deposer.component.css']
})
export class DeposerComponent implements OnInit {

  touched ;
  constructor(private router : Router) { }

  ngOnInit() {
  }

//*******************************Methode Next pour passer au depot des pieces jointes***************************
  next(e:NgForm){
    console.log(e);
    if(e.untouched)
      this.touched = false;
    else
      this.touched = true;
    if(e.valid)
      this.router.navigateByUrl("depotFiles");
    else
      alert('Merci de Remplir tous les Informations Pour Continuer !!');
  }
  //************************************************BISSI***********************************************
}
