import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavSearchbarComponent } from './nav-searchbar.component';

describe('NavSearchbarComponent', () => {
  let component: NavSearchbarComponent;
  let fixture: ComponentFixture<NavSearchbarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavSearchbarComponent]
    });
    fixture = TestBed.createComponent(NavSearchbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
