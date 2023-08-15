import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Task } from 'src/app/Taks';


@Component({
  selector: 'app-taks-item',
  templateUrl: './taks-item.component.html',
  styleUrls: ['./taks-item.component.css']
})
export class TaksItemComponent implements OnInit {

  @Input() tasks : Task[] | undefined;
  @Output() deleteEvent : EventEmitter<Task> = new EventEmitter();
  delete = "Delete"
  edit = "Edit"

  constructor() { }

  onDelete(task : Task){
    this.deleteEvent.emit(task);
  }

  toggleRemind(task: Task){
    task.reminder = !task.reminder;
  }

  ngOnInit(): void {
  }

}
