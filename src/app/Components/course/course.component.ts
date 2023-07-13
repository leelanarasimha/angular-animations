import { Component, Input } from '@angular/core';
import { Course } from 'src/app/models/Course.model';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styles: [],
})
export class CourseComponent {
  @Input() course!: Course;
}
