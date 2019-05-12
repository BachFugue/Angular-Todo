import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo';
import { TODOS } from '../mock-todos';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos = TODOS;
  showDialog = false;

  constructor() { }


  ngOnInit() {
  }

  openDialogComponent() {
    this.showDialog = true;
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.todos, event.previousIndex, event.currentIndex);
  }

}
