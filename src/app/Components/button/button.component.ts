import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  @Input() text : String | undefined;
  @Input() color : String | undefined;
  @Input() textColor : String | undefined;
  @Output() event : EventEmitter<boolean> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }



}
