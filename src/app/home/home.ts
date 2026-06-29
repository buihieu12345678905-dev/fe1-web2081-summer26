import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
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
