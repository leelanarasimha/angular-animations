import { Component } from '@angular/core';
import { Course } from './models/Course.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  courses: Course[] = [
    { title: 'Angular Complete Course', isActive: false },
    { title: 'Angular Unit Testing', isActive: false },
    { title: 'Angular RxJs', isActive: false },
  ];
  title = 'angular-animations';
}
