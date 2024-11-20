import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalObjectComponent } from './personal-object.component';

describe('PersonalObjectComponent', () => {
  let component: PersonalObjectComponent;
  let fixture: ComponentFixture<PersonalObjectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PersonalObjectComponent]
    });
    fixture = TestBed.createComponent(PersonalObjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
