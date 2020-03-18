export class Formateur{

      id;
      nom:string;
      prenom:string;
      dateN:Date;
      tel:string;
      reb:string;
      idU;

      constructor(nom,prenom,date,tel,reb)
      {
            this.nom = nom;
            this.prenom = prenom;
            this.dateN = date;
            this.tel=tel;
            this.reb= reb;
      }

}