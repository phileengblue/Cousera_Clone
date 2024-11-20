import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SezCCommunityComponent } from './sez-ccommunity.component';

describe('SezCCommunityComponent', () => {
  let component: SezCCommunityComponent;
  let fixture: ComponentFixture<SezCCommunityComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SezCCommunityComponent]
    });
    fixture = TestBed.createComponent(SezCCommunityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
