import { TodoService, Todo } from './../../todo.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  @Input("currentTodo") public todo : Todo;
 
  public counter : number= setInterval(() => {if(this.counter)this.counter++; }, 5000);
  
  constructor(private _todoService : TodoService) { }

  ngOnInit(): void {
  }

  remove()
  {
    this._todoService.removeTodo(this.todo);
  }

  changeFavStatus(newStatus : boolean)
  {
    this.todo.isfav = newStatus;
    this._todoService.notifyUpdate();
  }

}
