import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImmagineHeroComponent } from './immagine-hero.component';

describe('ImmagineHeroComponent', () => {
  let component: ImmagineHeroComponent;
  let fixture: ComponentFixture<ImmagineHeroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ImmagineHeroComponent]
    });
    fixture = TestBed.createComponent(ImmagineHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
