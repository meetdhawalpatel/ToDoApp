import { Todo, TodoService } from './../todo.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {

  public todo : Todo;

  public allTodos : Array<Todo>;

  constructor(private _todoService :TodoService) { 
    this._todoService.getAllTodo().subscribe(data => this.allTodos = data);
    this.todo = this._todoService.getEmptyTodo();
  }

  ngOnInit(): void {
  }

  save()
  {
    console.log(this.todo);
    this.todo.lmTime = new Date().getTime();
    this._todoService.addTodo(this.todo);
    this.todo =this._todoService.getEmptyTodo();
  }
}
