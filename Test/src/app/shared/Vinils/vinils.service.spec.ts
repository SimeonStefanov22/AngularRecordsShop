import { TestBed } from '@angular/core/testing';

import { VinilsService } from './vinils.service';

describe('VinilsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VinilsService = TestBed.get(VinilsService);
    expect(service).toBeTruthy();
  });
});
