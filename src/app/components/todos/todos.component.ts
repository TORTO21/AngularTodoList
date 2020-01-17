import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/Todo'
import { TodoService } from '../../services/todo.service'
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})

export class TodosComponent implements OnInit {
  todos:Todo[];

  constructor(private todoService:TodoService) { }

  ngOnInit() {
    // this.todos = this.todoService.getTodos()
    this.todoService.getTodos().subscribe(todos => {
      this.todos = todos
    })
  }

  deleteTodo(todo:Todo) {
    // Updates UI
    console.log('delete me from parent Todo component')
    this.todos = this.todos.filter(otherTodo => otherTodo.id !== todo.id)

    // Updates Server
    this.todoService.deleteTodo(todo).subscribe()
  }

}
