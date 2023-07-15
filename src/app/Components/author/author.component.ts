import { Component } from '@angular/core';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css'],
})
export class AuthorComponent {
  isActive: String = 'is-active';

  getActiveClasses() {
    return ['isActive'];
  }
}

//String
//array
