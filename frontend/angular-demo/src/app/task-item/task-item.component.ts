import { Component, Input, OnInit } from '@angular/core';
import { ITask } from 'src/models/task';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss'],
})
export class TaskItemComponent implements OnInit {
  @Input('task') task?: ITask;

  constructor() {}

  ngOnInit(): void {}
}
