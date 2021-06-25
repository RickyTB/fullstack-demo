import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

export interface DialogData {
  taskContent: string;
}

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss'],
})
export class AddTaskComponent implements OnInit {
  public data: DialogData = { taskContent: '' };
  constructor(public dialogRef: MatDialogRef<AddTaskComponent>) {}

  ngOnInit(): void {}

  onCancel(): void {
    this.dialogRef.close();
  }
}
