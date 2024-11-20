import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrovaCarSezione3Component } from './trova-car-sezione3.component';

describe('TrovaCarSezione3Component', () => {
  let component: TrovaCarSezione3Component;
  let fixture: ComponentFixture<TrovaCarSezione3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TrovaCarSezione3Component]
    });
    fixture = TestBed.createComponent(TrovaCarSezione3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
