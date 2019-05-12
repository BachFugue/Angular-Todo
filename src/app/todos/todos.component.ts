import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo';
import { TODOS } from '../mock-todos';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import {MatDialog} from '@angular/material/dialog';


@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos = TODOS;

  constructor() { }


  ngOnInit() {
  }

  // onSelect(todo: Todo) {
  //   let dialogRef = dialog.open('', {
  //     height: '400px',
  //     width: '600px',
  //   });
  // }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.todos, event.previousIndex, event.currentIndex);
  }

}
