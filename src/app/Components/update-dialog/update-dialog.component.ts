import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-update-dialog',
  templateUrl: './update-dialog.component.html',
  styleUrls: ['./update-dialog.component.css']
})
export class UpdateDialogComponent implements OnInit {
  constructor( private dialogRef: MatDialogRef<UpdateDialogComponent>,
    @Inject(MAT_DIALOG_DATA) private data: any, private fb: FormBuilder,) { 
    }

    myForm = new FormGroup({
      text : new FormControl(this.data.text),
      date : new FormControl(this.data.date)
    });
   

   

    submitForm(){
      this.data.text = this.myForm.value.text;
      this.data.date = this.myForm.value.date;

      this.dialogRef.close(this.data);
      // send this back to task-item
      // send from task-item to task
      // update it from there

      // how to send data from diolg back to where it was opened
    }

  ngOnInit(): void {
    console.log(this.data);
  }

}
