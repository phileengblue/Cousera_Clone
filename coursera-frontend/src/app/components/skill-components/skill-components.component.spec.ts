import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillComponentsComponent } from './skill-components.component';

describe('SkillComponentsComponent', () => {
  let component: SkillComponentsComponent;
  let fixture: ComponentFixture<SkillComponentsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SkillComponentsComponent]
    });
    fixture = TestBed.createComponent(SkillComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
