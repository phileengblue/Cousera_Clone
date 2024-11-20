import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NbButtonEsploraResponsiveComponent } from './nb-button-esplora-responsive.component';

describe('NbButtonEsploraResponsiveComponent', () => {
  let component: NbButtonEsploraResponsiveComponent;
  let fixture: ComponentFixture<NbButtonEsploraResponsiveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NbButtonEsploraResponsiveComponent]
    });
    fixture = TestBed.createComponent(NbButtonEsploraResponsiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
