import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrovaCarSezione2Component } from './trova-car-sezione2.component';

describe('TrovaCarSezione2Component', () => {
  let component: TrovaCarSezione2Component;
  let fixture: ComponentFixture<TrovaCarSezione2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TrovaCarSezione2Component]
    });
    fixture = TestBed.createComponent(TrovaCarSezione2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
