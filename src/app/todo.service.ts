import {  HttpClient, HttpHeaders } from '@angular/common/http';
import { TodoComponent } from './todolist/todo/todo.component';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private url = "https://ngtodoapp.herokuapp.com/todo/";
  private allTodos : Array<Todo>;
  constructor(private _http : HttpClient) { 
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

  private _getAuthHeader()
  {
   // let _headers = new HttpHeaders();
   // _headers.append('Authorization','Bearer ');
   // return {headers : _headers};

    return{
       headers : { 
      'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiZGhhd2FsIiwiZW1haWwiOiJkaGF3YWwucGF0ZWxAc2VjbG9yZS5jb20iLCJ1c2VySWQiOjcyNTIzMzkyMDU3MywiaWF0IjoxNTk2MjU5NDE2LCJleHAiOjE1OTYzNDU4MTZ9.EvBGWR82KV_rCfCYf-YlvuLWJb_f7FxVE-fwoKikUfw'}
    }
  }

  addTodo(newTodo : Todo)
  {
    this._http.post(this.url,
                JSON.stringify(newTodo), 
                this._getAuthHeader()).subscribe(data => console.log(data));
   // this.allTodos.push(newTodo);
   // this._updateStorage();
  }

  removeTodo(TodoTobeRemoved : Todo)
  {
    this._http.delete(this.url+'/'+TodoTobeRemoved.id,this._getAuthHeader()).subscribe(data => console.log(data));
   // let index = this.allTodos.indexOf(TodoTobeRemoved);
   // this.allTodos.splice(index,1);
   // this._updateStorage();
  }

  getAllTodo() : Observable<Todo[]>
  {
    return this._http.get<Todo[]>(this.url,this._getAuthHeader());//.subscribe(data => console.log(data));
    //return JSONData as unknown as Array<Todo>;
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
