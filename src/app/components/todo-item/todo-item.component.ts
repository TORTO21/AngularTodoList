import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Todo } from 'src/app/models/Todo'
import { TodoService } from '../../services/todo.service'
@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})

export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;
  @Output() deleteTodo: EventEmitter<Todo> = new EventEmitter()

  constructor(private todoService:TodoService) { }

  ngOnInit() {
  }

  // Set Dynamic Classes
  setClasses() {
    let classes = {
      todo: true,
      // 'is-complete' is the style class
      'is-complete': this.todo.completed
    }

    return classes
  }

  onToggle(todo) {
    //Toggle on UI
    console.log('toggle')
    todo.completed = !todo.completed
    // Toggle on Server
    this.todoService.toggleCompleted(todo).subscribe(todo => console.log(todo))
  }

  onDelete(todo) {
    console.log('delete from todo-item component')
    this.deleteTodo.emit(todo)
  }

}
