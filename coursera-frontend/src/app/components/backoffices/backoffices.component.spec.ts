import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackofficesComponent } from './backoffices.component';

describe('BackofficesComponent', () => {
  let component: BackofficesComponent;
  let fixture: ComponentFixture<BackofficesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BackofficesComponent]
    });
    fixture = TestBed.createComponent(BackofficesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
