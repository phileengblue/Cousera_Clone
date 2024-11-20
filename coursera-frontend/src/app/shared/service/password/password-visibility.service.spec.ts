import { TestBed } from '@angular/core/testing';

import { PasswordVisibilityService } from './password-visibility.service';

describe('PasswordVisibilityService', () => {
  let service: PasswordVisibilityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PasswordVisibilityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
