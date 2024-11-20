import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonDateComponent } from './button-date.component';

describe('ButtonDateComponent', () => {
  let component: ButtonDateComponent;
  let fixture: ComponentFixture<ButtonDateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ButtonDateComponent]
    });
    fixture = TestBed.createComponent(ButtonDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
