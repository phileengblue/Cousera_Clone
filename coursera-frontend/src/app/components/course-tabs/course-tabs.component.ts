import { Component, inject } from '@angular/core';
import { CourseDC } from 'src/app/shared/models/courseModel';
import { CourseService } from 'src/app/shared/service/course/course.service';

@Component({
  selector: 'app-course-tabs',
  templateUrl: './course-tabs.component.html',
  styleUrls: ['./course-tabs.component.css'],
})
export class CourseTabsComponent {
  private courseService: CourseService = inject(CourseService);
  details: CourseDC[] = [];

  ngOnInit(): void {
    this.details = this.courseService.getCourseData();
  }
}
