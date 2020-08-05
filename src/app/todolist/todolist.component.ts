import { Todo, TodoService } from './../todo.service';
import { Component, OnInit } from '@angular/core';
import { ThrowStmt } from '@angular/compiler';

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
    this._todoService.addTodo(this.todo).subscribe(data => this.allTodos.push(data));
    this.todo =this._todoService.getEmptyTodo();
  }

  remove(id : number)
  {
    let todoTobeRemoved;
    this.allTodos.forEach(element => {
       if(element.id === id) todoTobeRemoved = element;
    });

    this.allTodos.splice(this.allTodos.indexOf(todoTobeRemoved),1);
  }

  update(todo : Todo)
  {
    let todoTobeUpdated;
    this.allTodos.forEach(element => {
       if(element.id === todo.id) todoTobeUpdated = element;
    });

    this.allTodos.splice(this.allTodos.indexOf(todoTobeUpdated),1,todo);
  }
}
