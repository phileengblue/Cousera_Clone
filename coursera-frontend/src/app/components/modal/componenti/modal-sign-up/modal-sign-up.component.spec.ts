import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalSignUpComponent } from './modal-sign-up.component';

describe('ModalSignUpComponent', () => {
  let component: ModalSignUpComponent;
  let fixture: ComponentFixture<ModalSignUpComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalSignUpComponent]
    });
    fixture = TestBed.createComponent(ModalSignUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
