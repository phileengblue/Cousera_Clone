import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterOfAppliedDataScienceUmichComponent } from './master-of-applied-data-science-umich.component';

describe('MasterOfAppliedDataScienceUmichComponent', () => {
  let component: MasterOfAppliedDataScienceUmichComponent;
  let fixture: ComponentFixture<MasterOfAppliedDataScienceUmichComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MasterOfAppliedDataScienceUmichComponent]
    });
    fixture = TestBed.createComponent(MasterOfAppliedDataScienceUmichComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
