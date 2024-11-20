import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrovaCarSezione6Component } from './trova-car-sezione6.component';

describe('TrovaCarSezione6Component', () => {
  let component: TrovaCarSezione6Component;
  let fixture: ComponentFixture<TrovaCarSezione6Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TrovaCarSezione6Component]
    });
    fixture = TestBed.createComponent(TrovaCarSezione6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
