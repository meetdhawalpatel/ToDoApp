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
    this.allTodos = this._todoService.getAllTodo();
    this.todo = {title:"",disc:"",done:false,isfav:false,lmtime:0};
  }

  ngOnInit(): void {
  }

  save()
  {
    console.log(this.todo);
    this.todo.lmtime = new Date().getTime();
    this._todoService.addTodo(this.todo);
    this.todo = {title:"",disc:"",done:false,isfav:false,lmtime:0};
  }
}
