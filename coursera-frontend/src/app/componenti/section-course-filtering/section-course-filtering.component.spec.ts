import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionCourseFilteringComponent } from './section-course-filtering.component';

describe('SectionCourseFilteringComponent', () => {
  let component: SectionCourseFilteringComponent;
  let fixture: ComponentFixture<SectionCourseFilteringComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SectionCourseFilteringComponent]
    });
    fixture = TestBed.createComponent(SectionCourseFilteringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
