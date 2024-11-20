import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavModalSearchbarComponent } from './nav-modal-searchbar.component';

describe('NavModalSearchbarComponent', () => {
  let component: NavModalSearchbarComponent;
  let fixture: ComponentFixture<NavModalSearchbarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavModalSearchbarComponent]
    });
    fixture = TestBed.createComponent(NavModalSearchbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
