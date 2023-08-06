import { Component } from '@angular/core';
import { CoursesService } from './courses.service';
import { Course } from './course.model';
import { triggerState } from './animations';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css'],
  animations: [triggerState],
})
export class CoursesComponent {
  courses: Course[] = [];
  coursesLoaded = false;
  selectedCourseIndex!: number;
  createNewCourse = false;
  constructor(private coursesService: CoursesService) {}

  ngOnInit() {
    this.coursesService.getCourses().subscribe((courses) => {
      this.courses = courses;
      this.coursesLoaded = true;
    });
  }

  onStatusUpdate(newValue: string, index: number) {
    this.courses[index].status = newValue;
  }
  onCourseDelete(index: number) {
    this.courses.splice(index, 1);
  }

  onCourseSelected(index: number) {
    this.selectedCourseIndex = index;
  }

  onCourseCreate() {
    this.createNewCourse = true;
  }

  courseCreated(event: Course) {
    this.courses.unshift(event);
    this.createNewCourse = false;
  }

  courseCancel() {
    this.createNewCourse = false;
  }
}
