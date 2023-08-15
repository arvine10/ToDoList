import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Task } from '../Taks';
import { TASKS } from '../Tasks';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  constructor() { }

  tasks = TASKS;


  getTasks(): Observable<Task[]>{
    return of(this.tasks);
  }

  deleteTask(myTask : Task): Observable<Task[]>{
    return of(this.tasks.filter((task)=>task.id!=myTask.id));
  }

  
  


}
