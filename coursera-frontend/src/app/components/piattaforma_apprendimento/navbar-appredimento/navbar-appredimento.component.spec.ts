import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarAppredimentoComponent } from './navbar-appredimento.component';

describe('NavbarAppredimentoComponent', () => {
  let component: NavbarAppredimentoComponent;
  let fixture: ComponentFixture<NavbarAppredimentoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavbarAppredimentoComponent]
    });
    fixture = TestBed.createComponent(NavbarAppredimentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
