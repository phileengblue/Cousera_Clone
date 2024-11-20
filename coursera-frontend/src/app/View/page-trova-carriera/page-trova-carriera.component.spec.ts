import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageTrovaCarrieraComponent } from './page-trova-carriera.component';

describe('PageTrovaCarrieraComponent', () => {
  let component: PageTrovaCarrieraComponent;
  let fixture: ComponentFixture<PageTrovaCarrieraComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageTrovaCarrieraComponent]
    });
    fixture = TestBed.createComponent(PageTrovaCarrieraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
