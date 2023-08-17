import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Task } from '../Taks';
import { TASKS } from '../Tasks';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';

const headers = new HttpHeaders({
  'Content-Type': 'application/json'
});


@Injectable({
  providedIn: 'root'
})
export class TasksService {

  constructor(private http: HttpClient) { }

  tasks = TASKS;
  url = 'http://localhost:3004/tasks'


  getTasks(): Observable<Task[]>{
    return this.http.get<Task[]>(this.url);
  }

  deleteTask(myTask : Task): Observable<any>{
    return this.http.delete(`${this.url}/${myTask.id}`);
  }

  addTask(task : Task): Observable<any>{
    return this.http.post<Task>(this.url,task,{headers});
  }

  
  


}
