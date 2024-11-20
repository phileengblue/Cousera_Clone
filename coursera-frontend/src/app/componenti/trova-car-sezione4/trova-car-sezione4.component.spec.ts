import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrovaCarSezione4Component } from './trova-car-sezione4.component';

describe('TrovaCarSezione4Component', () => {
  let component: TrovaCarSezione4Component;
  let fixture: ComponentFixture<TrovaCarSezione4Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TrovaCarSezione4Component]
    });
    fixture = TestBed.createComponent(TrovaCarSezione4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
