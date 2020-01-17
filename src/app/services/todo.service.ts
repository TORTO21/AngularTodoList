import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Todo } from '../models/Todo'
import { Observable } from 'rxjs';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type' : 'application/json'
  })
}
@Injectable({
  providedIn: 'root'
})

export class TodoService {
  todosURL:string = 'https://jsonplaceholder.typicode.com/todos'
  todosLimit:number = 5
  constructor(private http:HttpClient) { }

  // Get Todos
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

  // Toggle Completed
  toggleCompleted(todo: Todo): Observable<any> {
    const url = `${this.todosURL}/${todo.id}`
    return this.http.put(url, todo, httpOptions)
  }

  deleteTodo(todo:Todo): Observable<Todo> {
    const url = `${this.todosURL}/${todo.id}`
    return this.http.delete<Todo>(url, httpOptions)
  }

  addTodo(todo:Todo): Observable<Todo> {
    return this.http.post<Todo>(this.todosURL, todo, httpOptions)
  }
}
