import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { MatDialog } from '@angular/material/dialog';
import { ITask } from 'src/models/task';
import { UpdateTaskComponent } from '../update-task/update-task.component';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss'],
})
export class TaskItemComponent implements OnInit {
  @Input('task') task!: ITask;
  @Output('edit-task') editTask = new EventEmitter();
  @Output('delete-task') deleteTask = new EventEmitter();

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

  onCheckChange(event: MatCheckboxChange) {
    this.editTask.emit({
      id: this.task.id,
      text: this.task.text,
      done: event.checked,
    });
  }

  onEditClick() {
    const dialogRef = this.dialog.open(UpdateTaskComponent, {
      width: '550px',
      data: { text: this.task.text },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (!result) return;
      this.editTask.emit({
        id: this.task.id,
        text: result,
        done: this.task.done,
      });
    });
  }

  onDeleteClick() {
    this.deleteTask.emit(this.task.id);
  }
}
