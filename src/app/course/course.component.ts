import {
  Component,
  Input,
  ViewChild,
  ElementRef,
  EventEmitter,
  Output,
} from '@angular/core';
import { Course } from '../courses/course.model';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css'],
})
export class CourseComponent {
  @Input() course!: Course;
  @ViewChild('statusRef') statusRef!: ElementRef<HTMLSelectElement>;
  @Output() statusUpdated = new EventEmitter<string>();
  @Output() courseDeleted = new EventEmitter<void>();

  onStatusUpdate() {
    const selectedValue = this.statusRef.nativeElement.value;
    this.statusUpdated.emit(selectedValue);
  }

  onCourseDelete() {
    this.courseDeleted.emit();
  }

  getCourseStatusClass() {
    return {
      'bg-success': this.course.status === 'active',
      'bg-secondary': this.course.status === 'inactive',
      'bg-danger': this.course.status === 'draft',
    };
  }
}
