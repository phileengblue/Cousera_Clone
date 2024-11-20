import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tcs4CaroselloVideoCardComponent } from './tcs4-carosello-video-card.component';

describe('Tcs4CaroselloVideoCardComponent', () => {
  let component: Tcs4CaroselloVideoCardComponent;
  let fixture: ComponentFixture<Tcs4CaroselloVideoCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Tcs4CaroselloVideoCardComponent]
    });
    fixture = TestBed.createComponent(Tcs4CaroselloVideoCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
