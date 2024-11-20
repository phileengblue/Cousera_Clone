import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadSectionComponent } from './head-section.component';

describe('HeadSectionComponent', () => {
  let component: HeadSectionComponent;
  let fixture: ComponentFixture<HeadSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeadSectionComponent]
    });
    fixture = TestBed.createComponent(HeadSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
