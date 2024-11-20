import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavDropendComponent } from './nav-dropend.component';

describe('NavDropendComponent', () => {
  let component: NavDropendComponent;
  let fixture: ComponentFixture<NavDropendComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavDropendComponent]
    });
    fixture = TestBed.createComponent(NavDropendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
