import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionSolutionComponent } from './section-solution.component';

describe('SectionSolutionComponent', () => {
  let component: SectionSolutionComponent;
  let fixture: ComponentFixture<SectionSolutionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SectionSolutionComponent]
    });
    fixture = TestBed.createComponent(SectionSolutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
