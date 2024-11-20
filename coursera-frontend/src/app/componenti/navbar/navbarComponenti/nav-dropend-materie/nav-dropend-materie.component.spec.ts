import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavDropendMaterieComponent } from './nav-dropend-materie.component';

describe('NavDropendMaterieComponent', () => {
  let component: NavDropendMaterieComponent;
  let fixture: ComponentFixture<NavDropendMaterieComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavDropendMaterieComponent]
    });
    fixture = TestBed.createComponent(NavDropendMaterieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
