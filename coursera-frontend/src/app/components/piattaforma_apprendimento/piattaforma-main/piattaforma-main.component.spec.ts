import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PiattaformaMainComponent } from './piattaforma-main.component';

describe('PiattaformaMainComponent', () => {
  let component: PiattaformaMainComponent;
  let fixture: ComponentFixture<PiattaformaMainComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PiattaformaMainComponent]
    });
    fixture = TestBed.createComponent(PiattaformaMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
