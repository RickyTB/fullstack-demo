import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { ITask } from 'src/models/task';
import { API_URL } from 'src/utils/constants';
import { AddTaskComponent } from '../add-task/add-task.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-task-container',
  templateUrl: './task-container.component.html',
  styleUrls: ['./task-container.component.scss'],
})
export class TaskContainerComponent implements OnInit {
  taskList: ITask[] = [];

  constructor(private http: HttpClient, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.http
      .get<ITask[]>(`${API_URL}/tasks`)
      .pipe(
        map((data) => {
          return data.map((task) => ({
            ...task,
            created: new Date(task.created),
          }));
        })
      )
      .subscribe((data) => {
        this.taskList = data;
      });
  }

  addTask() {
    let dialogRef = this.dialog.open(AddTaskComponent, { width: '550px' });
    dialogRef.afterClosed().subscribe((result) => {
      if (!result) return;
      this.http
        .post<ITask>(`${API_URL}/tasks`, { text: result, done: false })
        .subscribe((data) => {
          this.taskList = [data, ...this.taskList];
        });
    });
  }

  updateTask({
    id,
    ...taskUpdate
  }: {
    id: string;
    text: string;
    done: boolean;
  }) {
    this.http
      .put<ITask>(`${API_URL}/tasks/${id}`, taskUpdate)
      .subscribe((data) => {
        this.taskList = this.taskList.map((task) =>
          task.id === id ? data : task
        );
      });
  }

  deleteTask(id: string) {
    this.http.delete(`${API_URL}/tasks/${id}`).subscribe(() => {
      this.taskList = this.taskList.filter((task) => task.id !== id);
    });
  }
}
