import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Task } from 'src/app/Taks';
import { UpdateDialogComponent } from '../update-dialog/update-dialog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-taks-item',
  templateUrl: './taks-item.component.html',
  styleUrls: ['./taks-item.component.css']
})
export class TaksItemComponent implements OnInit {

  @Input() tasks : Task[] | undefined;
  @Output() deleteEvent : EventEmitter<Task> = new EventEmitter();
  @Output() updateRemind : EventEmitter<Task> = new EventEmitter();
  @Output() updateTask : EventEmitter<Task> = new EventEmitter();
  delete = "Delete"
  edit = "Edit"

  constructor(private dialog : MatDialog) { }

  onDelete(task : Task){
    this.deleteEvent.emit(task);
  }

  update(task: Task){
    const diolgRef = this.dialog.open(UpdateDialogComponent, {
      width: '300px',
      height: '300px',
      data : task
    });

    diolgRef.afterClosed().subscribe(result => {
      if (result)this.updateTask.emit(result);
    });
  }

  toggleRemind(task: Task){
    this.updateRemind.emit(task);
  }

  ngOnInit(): void {
  }

}
