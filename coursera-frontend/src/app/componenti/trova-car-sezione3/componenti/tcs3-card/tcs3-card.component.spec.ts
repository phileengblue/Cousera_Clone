import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tcs3CardComponent } from './tcs3-card.component';

describe('Tcs3CardComponent', () => {
  let component: Tcs3CardComponent;
  let fixture: ComponentFixture<Tcs3CardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Tcs3CardComponent]
    });
    fixture = TestBed.createComponent(Tcs3CardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
