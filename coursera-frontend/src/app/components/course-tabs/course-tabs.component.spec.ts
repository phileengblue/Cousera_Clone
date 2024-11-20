import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseTabsComponent } from './course-tabs.component';

describe('CourseTabsComponent', () => {
  let component: CourseTabsComponent;
  let fixture: ComponentFixture<CourseTabsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CourseTabsComponent]
    });
    fixture = TestBed.createComponent(CourseTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
