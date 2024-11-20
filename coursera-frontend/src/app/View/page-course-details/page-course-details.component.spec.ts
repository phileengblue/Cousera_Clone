import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageCourseDetailsComponent } from './page-course-details.component';

describe('PageCourseDetailsComponent', () => {
  let component: PageCourseDetailsComponent;
  let fixture: ComponentFixture<PageCourseDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageCourseDetailsComponent]
    });
    fixture = TestBed.createComponent(PageCourseDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
