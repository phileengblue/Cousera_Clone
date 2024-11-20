import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NbButtonEsploraComponent } from './nb-button-esplora.component';

describe('NbButtonEsploraComponent', () => {
  let component: NbButtonEsploraComponent;
  let fixture: ComponentFixture<NbButtonEsploraComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NbButtonEsploraComponent]
    });
    fixture = TestBed.createComponent(NbButtonEsploraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
