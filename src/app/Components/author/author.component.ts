import { Component } from '@angular/core';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css'],
})
export class AuthorComponent {
  isActive: boolean = true;

  getActiveClasses() {
    return ['isActive'];
  }

  getColor() {
    return this.isActive ? 'green' : 'red';
  }
}

//String
//array
