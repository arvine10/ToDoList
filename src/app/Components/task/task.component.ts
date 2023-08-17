import { Component, OnInit } from '@angular/core';
import { TasksService } from 'src/app/Services/tasks.service';
import { TASKS } from 'src/app/Tasks';
import { Task } from 'src/app/Taks';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  tasks : Task[] | undefined;

  form = new FormGroup({
    text: new FormControl(''),
    date: new FormControl(''),
    reminder: new FormControl(''),
  });

  isAdd : boolean | undefined;

  constructor(private taskService: TasksService) { }

  ngOnInit(): void {
    this.taskService.getTasks().subscribe((tasks)=>{
      this.tasks = tasks
    });

    this.taskService.returnSubject().subscribe((val)=>{
      this.isAdd = val;
    });
  }

  deleteTask(task : Task){
    this.taskService.deleteTask(task).subscribe(()=>{
      this.tasks = this.tasks?.filter((mytask)=>mytask.id!=task.id);
    });
  }

  submitTask(){
    if (this.form.valid){
      let task = this.form.value as any;
      console.log(typeof task);
      this.taskService.addTask(task).subscribe(()=>{
        this.tasks?.push(task);

        this.form.reset();

        this.taskService.getTasks().subscribe((tasks)=>{
          this.tasks = tasks;
        })
      });
    }

  }

}
