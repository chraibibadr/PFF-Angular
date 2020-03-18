import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Task } from '../Models/Task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  server = "http://localhost:8000/";
  constructor(private http:HttpClient) { }

  addTask(nom):Observable<Task>{
     const task = new Task(nom);
     return this.http.post<Task>(this.server+'add',task); 
  }
}
