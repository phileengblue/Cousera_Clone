import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiddleSection2Component } from './middle-section2.component';

describe('MiddleSection2Component', () => {
  let component: MiddleSection2Component;
  let fixture: ComponentFixture<MiddleSection2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MiddleSection2Component]
    });
    fixture = TestBed.createComponent(MiddleSection2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
