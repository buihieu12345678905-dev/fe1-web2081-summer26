import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  title = 'my-app';
  name = 'hieu';
  age = '22';

  sayHello() {
    alert('hello ');
    console.log('hello');
    
  }

  handleClick() {
  alert("hello");
}
}
