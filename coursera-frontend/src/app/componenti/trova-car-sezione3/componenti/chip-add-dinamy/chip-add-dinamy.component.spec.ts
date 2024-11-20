import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChipAddDinamyComponent } from './chip-add-dinamy.component';

describe('ChipAddDinamyComponent', () => {
  let component: ChipAddDinamyComponent;
  let fixture: ComponentFixture<ChipAddDinamyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChipAddDinamyComponent]
    });
    fixture = TestBed.createComponent(ChipAddDinamyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
