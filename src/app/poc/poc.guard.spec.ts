import { TestBed } from '@angular/core/testing';

import { PocGuard } from './poc.guard';

describe('PocGuard', () => {
  let guard: PocGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(PocGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
