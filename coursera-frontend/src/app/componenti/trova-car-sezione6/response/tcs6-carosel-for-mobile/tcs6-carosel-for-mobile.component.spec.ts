import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tcs6CaroselForMobileComponent } from './tcs6-carosel-for-mobile.component';

describe('Tcs6CaroselForMobileComponent', () => {
  let component: Tcs6CaroselForMobileComponent;
  let fixture: ComponentFixture<Tcs6CaroselForMobileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Tcs6CaroselForMobileComponent]
    });
    fixture = TestBed.createComponent(Tcs6CaroselForMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
