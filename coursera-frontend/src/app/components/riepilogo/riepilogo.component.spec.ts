import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RiepilogoComponent } from './riepilogo.component';

describe('RiepilogoComponent', () => {
  let component: RiepilogoComponent;
  let fixture: ComponentFixture<RiepilogoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RiepilogoComponent]
    });
    fixture = TestBed.createComponent(RiepilogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
