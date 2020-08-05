import {  HttpClient, HttpHeaders } from '@angular/common/http';
import { TodoComponent } from './todolist/todo/todo.component';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private url = "https://ngtodoapp.herokuapp.com/todo/";
  
  constructor(private _http : HttpClient) { 
  }

  private _getAuthHeader()
  {
    return{
       headers : { 
      'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiZGhhd2FsIiwiZW1haWwiOiJkaGF3YWwucGF0ZWxAc2VjbG9yZS5jb20iLCJ1c2VySWQiOjcyNTIzMzkyMDU3MywiaWF0IjoxNTk2NjAyMzYyLCJleHAiOjE1OTY2ODg3NjJ9.FxiQqjnF2ln7NtzWHLucR0TUDGalPpVpPEmYwlIlZiA'}
    }
  }

  addTodo(newTodo : Todo): Observable<Todo>
  {
    console.log(JSON.stringify(newTodo));
    return this._http.post<Todo>(this.url, newTodo, this._getAuthHeader());
  }

  removeTodo(TodoTobeRemoved : Todo) : Observable<Todo>
  {
    return this._http.delete<Todo>(this.url+TodoTobeRemoved.id,this._getAuthHeader());
  }

  getAllTodo() : Observable<Todo[]>
  {
    return this._http.get<Todo[]>(this.url,this._getAuthHeader());
  }

  updateTodo(TodoTobeUpdated : Todo) : Observable<Todo>
  {
    return this._http.put<Todo>(this.url+TodoTobeUpdated.id,TodoTobeUpdated,this._getAuthHeader());
  }

  getEmptyTodo() : Todo
  {
    return {
      id : -1,
      title: '',
      desc:'',
      isFavorite:false,
      createdBy:-1,
      lmBy:-1,
      creationTime:-1,
      lmTime:-1,
    }
  }

}

export interface Todo
{
  id:number;
  title:string;
  desc:string;
  isFavorite:boolean;
  createdBy:number;
  lmBy:number;
  creationTime:number;
  lmTime:number;
}
