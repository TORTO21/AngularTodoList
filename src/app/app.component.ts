import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-crash-todolist';
  name:string = "Oli"

  constructor () {
    console.log(123)
    this.changeName('Oliver')
  }

  changeName(name:string):void {
    this.name = name;
  }
}
