import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrovaCarSezione1Component } from './trova-car-sezione1.component';

describe('TrovaCarSezione1Component', () => {
  let component: TrovaCarSezione1Component;
  let fixture: ComponentFixture<TrovaCarSezione1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TrovaCarSezione1Component]
    });
    fixture = TestBed.createComponent(TrovaCarSezione1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
