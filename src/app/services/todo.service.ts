import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Todo } from '../models/Todo'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})

export class TodoService {
  todosURL:string = 'https://jsonplaceholder.typicode.com/todos'
  todosLimit:number = 5
  constructor(private http:HttpClient) { }

  getTodos():Observable<Todo[]> {
    return this.http.get<Todo[]>(`${this.todosURL}?_limit=${this.todosLimit}`)
    // return [
    //   {
    //     id: 1,
    //     title: "First Todo New",
    //     completed: false,
    //   },
    //   {
    //     id: 2,
    //     title: "Second Todo",
    //     completed: false,
    //   },
    //   {
    //     id: 3,
    //     title: "Third Todo",
    //     completed: false,
    //   },
    // ]

  }
}
