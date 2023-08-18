import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject, of } from 'rxjs';
import { Task } from '../Taks';
import { TASKS } from '../Tasks';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';

const headers = new HttpHeaders({
  'Content-Type': 'application/json'
});


@Injectable({
  providedIn: 'root'
})
export class TasksService {

  constructor(private http: HttpClient) { }

  tasks = TASKS;
  val = true;
  subject = new BehaviorSubject<boolean>(this.val);
  


  toggleValue() {
    this.val = !this.val;
    this.subject.next(this.val);
  }

  returnSubject():Subject<boolean>{
    return this.subject;
  }


  getTasks(): Observable<Task[]>{
    return this.http.get<Task[]>(environment.url);
  }

  deleteTask(myTask : Task): Observable<any>{
    return this.http.delete(`${environment.url}/${myTask.id}`);
  }

  addTask(task : Task): Observable<any>{
    return this.http.post<Task>(environment.url,task,{headers});
  }

  updateTask(task: Task):Observable<any>{
    return this.http.put<Task>(`${environment.url}/${task.id}`,task);
  }

  
  


}
