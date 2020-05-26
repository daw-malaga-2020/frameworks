import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {

  constructor() { }
  @Input("title")  title: string;
  @Input("done") done: boolean

  @Output() change:EventEmitter<any> = new EventEmitter()
  @Output() remove:EventEmitter<any> = new EventEmitter()
  ngOnInit(): void {
  }

}
