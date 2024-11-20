import { TestBed } from '@angular/core/testing';

import { ApiFilterService } from './api-filter.service';

describe('ApiFilterService', () => {
  let service: ApiFilterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiFilterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
