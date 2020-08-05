import { TodoService, Todo } from './../../todo.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  @Input("currentTodo") public todo : Todo;
  @Output("onRemove") public removeEventEmiiter = new EventEmitter();
  @Output("onUpdate") public updateEventEmiiter = new EventEmitter();
 
  public counter : number= setInterval(() => {if(this.counter)this.counter++; }, 5000);
  
  constructor(private _todoService : TodoService) { }

  ngOnInit(): void {
  }

  remove()
  {
    this._todoService.removeTodo(this.todo)
    .subscribe(data => this.removeEventEmiiter.emit(data.id));
  }

  changeFavStatus(newStatus : boolean)
  {
    this.todo.isFavorite = newStatus;
    this._todoService.updateTodo(this.todo)
    .subscribe((data )=> {
              this.todo = data;
              this.updateEventEmiiter.emit(this.todo);  
            });
  }

}
