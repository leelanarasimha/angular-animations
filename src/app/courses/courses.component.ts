import { Component } from '@angular/core';
import { CoursesService } from './courses.service';
import { Course } from './course.model';
import { courseAddState, newCourseState, triggerState } from './animations';
import { AnimationEvent } from '@angular/animations';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css'],
  animations: [triggerState, courseAddState, newCourseState],
})
export class CoursesComponent {
  courses: Course[] = [];
  coursesLoaded = false;
  selectedCourseIndex!: number;
  displayedCourses: Course[] = [];
  createNewCourse = false;
  constructor(private coursesService: CoursesService) {}

  ngOnInit() {
    this.coursesService.getCourses().subscribe((courses) => {
      this.courses = courses;
      this.displayedCourses.push(this.courses[0]);
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
    this.courses.push(event);
    this.createNewCourse = false;
  }

  courseCancel() {
    this.createNewCourse = false;
  }

  onCourseAddDone(event: AnimationEvent, i: number) {
    if (event.fromState !== 'void') {
      return;
    }

    if (this.courses.length > i + 1) {
      this.displayedCourses.push(this.courses[i + 1]);
    } else {
      this.displayedCourses = this.courses;
    }
  }
}
