import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-deposer',
  templateUrl: './deposer.component.html',
  styleUrls: ['./deposer.component.css']
})
export class DeposerComponent implements OnInit {


  constructor(private router : Router) { }

  ngOnInit() {
  }

//*******************************Methode Next pour passer au depot des pieces jointes***************************
  next(e){
    console.log(e);
    if(e.valid)
      this.router.navigateByUrl("depotFiles");
    else
      alert('Merci de Remplir tous les Informations Pour Continuer !!');
  }
  //************************************************BISSI***********************************************
}
