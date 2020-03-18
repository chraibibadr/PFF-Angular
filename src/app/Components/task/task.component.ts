import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/Services/task.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  nom:string;
  constructor(private taskService: TaskService) { }

  ngOnInit() {
  }

  add(e){
    e.preventDefault();
    this.taskService.addTask(this.nom).subscribe((data)=>{
      console.log('bien added');
    });
  }
  
}
