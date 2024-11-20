import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavButtonSignupComponent } from './nav-button-signup.component';

describe('NavButtonSignupComponent', () => {
  let component: NavButtonSignupComponent;
  let fixture: ComponentFixture<NavButtonSignupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavButtonSignupComponent]
    });
    fixture = TestBed.createComponent(NavButtonSignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
