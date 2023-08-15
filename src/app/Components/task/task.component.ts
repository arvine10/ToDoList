import { Component, OnInit } from '@angular/core';
import { TasksService } from 'src/app/Services/tasks.service';
import { TASKS } from 'src/app/Tasks';
import { Task } from 'src/app/Taks';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  tasks : Task[] | undefined;

  constructor(private taskService: TasksService) { }

  ngOnInit(): void {
    this.taskService.getTasks().subscribe((tasks)=>{
      this.tasks = tasks
    });
  }

  deleteTask(task : Task){
    this.taskService.deleteTask(task).subscribe((tasks)=>{
      this.tasks = tasks;
    })
  }

}
