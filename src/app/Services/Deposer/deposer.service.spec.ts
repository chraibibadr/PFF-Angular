import { TestBed } from '@angular/core/testing';

import { DeposerService } from './deposer.service';

describe('DeposerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DeposerService = TestBed.get(DeposerService);
    expect(service).toBeTruthy();
  });
});
