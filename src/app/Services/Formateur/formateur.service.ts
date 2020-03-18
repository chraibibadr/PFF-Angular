import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Formateur } from 'src/app/Models/Formateur';

@Injectable({
  providedIn: 'root'
})
export class FormateurService {
  
  headers:Headers = new Headers();
  server ="http://127.0.0.1:8080/PFF/public/" ;

  constructor(private http:HttpClient) { 
    this.headers.append('enctype','multipart/form-data');
    this.headers.append('Content-Type','application/json');
    this.headers.append('X-Requested-With','XMLHttpRequest');
  }

  addFormateur(f:Formateur):Observable<Formateur>{
    return this.http.post<Formateur>(this.server+'add',new Formateur(f.nom,f.prenom,f.dateN,f.tel,f.reb));
  }
}
