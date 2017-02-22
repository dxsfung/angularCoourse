import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from './task.model';

@Component({
  selector: 'task-list',
  template: `
    <div *ngFor="let currentTask of childTaskList">
      <h3>{{ currentTask.description }}</h3>
      <button (click)="editButtonHasBeenClicked(currentTask)">Edit</button>
      <button (click)="deleteButtonClicked (currentTask)">Delete</button>
    </div>
  `
})

export class TaskListComponent {
  @Input() childTaskList: Task[];
  @Output() clickSender = new EventEmitter();
  @Output() deleteSender = new EventEmitter();

  editButtonHasBeenClicked(taskToEdit: Task) {
    this.clickSender.emit(taskToEdit);
  }
  deleteButtonClicked(taskTodelete: Task) {
    this.deleteSender.emit(taskTodelete);
  }

}
