import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Formateur } from 'src/app/Models/Formateur';

@Injectable({
  providedIn: 'root'
})
export class FormateurService {
  
  server = "http://localhost:8000/";

  constructor(private http:HttpClient) { }

  addFormateur(f:Formateur):Observable<Formateur>{
    return this.http.post<Formateur>(this.server+'add',new Formateur(f.nom,f.prenom,f.dateN,f.tel,f.reb));
  }
}
