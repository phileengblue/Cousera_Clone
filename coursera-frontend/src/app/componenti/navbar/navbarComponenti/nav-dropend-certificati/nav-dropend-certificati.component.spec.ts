import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavDropendCertificatiComponent } from './nav-dropend-certificati.component';

describe('NavDropendCertificatiComponent', () => {
  let component: NavDropendCertificatiComponent;
  let fixture: ComponentFixture<NavDropendCertificatiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavDropendCertificatiComponent]
    });
    fixture = TestBed.createComponent(NavDropendCertificatiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
