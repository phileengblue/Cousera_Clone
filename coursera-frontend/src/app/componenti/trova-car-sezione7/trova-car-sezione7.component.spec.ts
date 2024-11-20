import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrovaCarSezione7Component } from './trova-car-sezione7.component';

describe('TrovaCarSezione7Component', () => {
  let component: TrovaCarSezione7Component;
  let fixture: ComponentFixture<TrovaCarSezione7Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TrovaCarSezione7Component]
    });
    fixture = TestBed.createComponent(TrovaCarSezione7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
