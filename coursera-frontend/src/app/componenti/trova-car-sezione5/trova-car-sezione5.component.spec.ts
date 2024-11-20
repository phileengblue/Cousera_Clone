import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrovaCarSezione5Component } from './trova-car-sezione5.component';

describe('TrovaCarSezione5Component', () => {
  let component: TrovaCarSezione5Component;
  let fixture: ComponentFixture<TrovaCarSezione5Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TrovaCarSezione5Component]
    });
    fixture = TestBed.createComponent(TrovaCarSezione5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
