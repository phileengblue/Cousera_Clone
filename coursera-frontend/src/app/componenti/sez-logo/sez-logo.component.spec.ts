import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SezLogoComponent } from './sez-logo.component';

describe('SezLogoComponent', () => {
  let component: SezLogoComponent;
  let fixture: ComponentFixture<SezLogoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SezLogoComponent]
    });
    fixture = TestBed.createComponent(SezLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
