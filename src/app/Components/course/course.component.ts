import { DomElementSchemaRegistry } from '@angular/compiler';
import { Component, Input, ViewEncapsulation } from '@angular/core';
import { Course } from 'src/app/models/Course.model';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class CourseComponent {
  @Input() course!: Course;
}
