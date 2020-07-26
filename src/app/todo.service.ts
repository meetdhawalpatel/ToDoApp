import { TodoComponent } from './todolist/todo/todo.component';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private allTodos : Array<Todo>;
  constructor() { 
      let tempTodos = localStorage.getItem("todos");
      if(tempTodos)
      {
        this.allTodos = JSON.parse(tempTodos);
      }
      else
      {
        this.allTodos = new Array<Todo>();
      }
  }

  addTodo(newTodo : Todo)
  {
    this.allTodos.push(newTodo);
    this._updateStorage();
  }

  removeTodo(TodoTobeRemoved : Todo)
  {
    let index = this.allTodos.indexOf(TodoTobeRemoved);
    this.allTodos.splice(index,1);
    this._updateStorage();
  }

  getAllTodo()
  {
    return this.allTodos;
  }

  _updateStorage()
  {
    let jsonString = JSON.stringify(this.allTodos);
    localStorage.setItem("todos",jsonString);
  }

  notifyUpdate()
  {
    this._updateStorage();
  }

}

export interface Todo
{
  title : string,
  disc : string,
  isfav : boolean,
  done : boolean,
  lmtime : number
}
