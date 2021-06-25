import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { ITask } from 'src/models/task';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss'],
})
export class TaskListComponent implements OnInit, OnChanges {
  @Input('task-list') taskList: ITask[] = [];
  pendingTasks: ITask[] = [];
  doneTasks: ITask[] = [];

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    if (!changes.taskList) return;
    const tasks: ITask[] = changes.taskList.currentValue;
    const [pending, done] = tasks.reduce(
      (arr, task) => {
        if (!task.done) arr[0].push(task);
        else arr[1].push(task);
        return arr;
      },
      [[], []] as [ITask[], ITask[]]
    );
    this.pendingTasks = pending;
    this.doneTasks = done;
  }

  ngOnInit(): void {}
}
