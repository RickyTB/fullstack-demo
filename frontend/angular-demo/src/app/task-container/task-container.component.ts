import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { ITask } from 'src/models/task';
import { API_URL } from 'src/utils/constants';

@Component({
  selector: 'app-task-container',
  templateUrl: './task-container.component.html',
  styleUrls: ['./task-container.component.scss'],
})
export class TaskContainerComponent implements OnInit {
  taskList: ITask[] = [];

  constructor(private http: HttpClient) {}

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
}
