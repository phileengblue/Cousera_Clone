import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tcs6CaroselForTabletComponent } from './tcs6-carosel-for-tablet.component';

describe('Tcs6CaroselForTabletComponent', () => {
  let component: Tcs6CaroselForTabletComponent;
  let fixture: ComponentFixture<Tcs6CaroselForTabletComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Tcs6CaroselForTabletComponent]
    });
    fixture = TestBed.createComponent(Tcs6CaroselForTabletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
