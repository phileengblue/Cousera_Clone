import { TestBed } from '@angular/core/testing';

import { DiscountedCoursesService } from './discounted-courses.service';

describe('DiscountedCoursesService', () => {
  let service: DiscountedCoursesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DiscountedCoursesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
