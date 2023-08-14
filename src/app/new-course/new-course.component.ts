import { Component, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Course } from '../courses/course.model';
import { buttonStateTrigger, courseFormState } from './animations';

@Component({
  selector: 'app-new-course',
  templateUrl: './new-course.component.html',
  styleUrls: ['./new-course.component.css'],
  animations: [buttonStateTrigger, courseFormState],
})
export class NewCourseComponent {
  @Output() courseCreated = new EventEmitter<Course>();
  @Output() courseCanceled = new EventEmitter<void>();
  courseForm = new FormGroup({
    name: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    status: new FormControl('', Validators.required),
  });
  statuses = ['active', 'inactive', 'draft'];

  onCourseCreate() {
    console.log(this.courseForm.value);
    this.courseCreated.emit(this.courseForm.value as Course);
  }

  onCourseCancel() {
    this.courseCanceled.emit();
  }
}
