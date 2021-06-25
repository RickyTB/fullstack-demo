import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
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
  @Output('edit-task') editTaskEmitter = new EventEmitter();
  @Output('delete-task') deleteTaskEmitter = new EventEmitter();
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

  editTask(taskUpdate: { id: string; text: string; done: string }) {
    this.editTaskEmitter.emit(taskUpdate);
  }

  deleteTask(id: string) {
    this.deleteTaskEmitter.emit(id);
  }
}
