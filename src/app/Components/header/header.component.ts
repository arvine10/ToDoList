import { Component, Input, OnInit } from '@angular/core';
import { TasksService } from 'src/app/Services/tasks.service';
import { ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';
import { Task } from 'src/app/Taks';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private taskService : TasksService) { }

  color : String = 'green'
  text : String = 'ADD';
  bool : boolean | undefined = undefined;

  @Input() desc : String | undefined;

  toggleBtn(){
    this.taskService.toggleValue();
  }

  ngOnInit(): void {
    this.taskService.returnSubject().subscribe((val)=>{
      this.bool = val;
      if (this.bool) {
        this.color = 'green'
        this.text = 'ADD'
      }
      else {
        this.color = 'red';
        this.text = 'CLOSE'
      }
      
    });
  }

  addTask(){

  }


}
