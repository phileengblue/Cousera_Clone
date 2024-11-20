import { Component, inject } from '@angular/core';
import { CourseDC, CourseApi } from 'src/app/shared/models/courseModel';
import { CourseService } from 'src/app/shared/service/course/course.service';
import { DateService } from 'src/app/shared/service/date/date.service';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css'],
})
export class CourseDetailsComponent {
  date: Date = new Date();
  formattedDate: string = '';

  private dateService: DateService = inject(DateService);
  private courseService: CourseService = inject(CourseService);
  details: CourseDC[] = [];

  courseData: CourseApi[] = [];

  getCourseList() {
    this.courseService.getAllCourse().subscribe((data) => {
      this.courseData = data;
      console.log(this.courseData);
    });
  }

  ngOnInit(): void {
    this.getCourseList();
    this.details = this.courseService.getCourseData();
    this.formattedDate = this.dateService.formatDate(this.date);
  }
}
