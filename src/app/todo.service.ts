import {  HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private url = 'https://ngtodoapp.herokuapp.com/todo/';

  constructor(private _http: HttpClient) {
  }


  addTodo(newTodo: Todo): Observable<Todo>
  {
    console.log(JSON.stringify(newTodo));
    return this._http.post<Todo>(this.url, newTodo).pipe(
      catchError(error => {console.log(error);
                           throw throwError('MY Error'); })
    );
  }

  removeTodo(TodoTobeRemoved: Todo): Observable<Todo>
  {
    return this._http.delete<Todo>(this.url + TodoTobeRemoved.id);
  }

  getAllTodo(): Observable<Todo[]>
  {
    return this._http.get<Todo[]>(this.url).pipe(
      catchError(error => {throw throwError('MY Error'); })
    );
  }

  updateTodo(TodoTobeUpdated: Todo): Observable<Todo>
  {
    return this._http.put<Todo>(this.url + TodoTobeUpdated.id, TodoTobeUpdated);
  }

  getEmptyTodo(): Todo
  {
    return {
      id : -1,
      title: '',
      desc: '',
      isFavorite: false,
      createdBy: -1,
      lmBy: -1,
      creationTime: -1,
      lmTime: -1,
    };
  }

}

export interface Todo
{
  id: number;
  title: string;
  desc: string;
  isFavorite: boolean;
  createdBy: number;
  lmBy: number;
  creationTime: number;
  lmTime: number;
}
