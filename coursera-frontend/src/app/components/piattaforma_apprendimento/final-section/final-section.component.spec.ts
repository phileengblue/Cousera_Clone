import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalSectionComponent } from './final-section.component';

describe('FinalSectionComponent', () => {
  let component: FinalSectionComponent;
  let fixture: ComponentFixture<FinalSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FinalSectionComponent]
    });
    fixture = TestBed.createComponent(FinalSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
