import { TestBed } from '@angular/core/testing';

import { BuyVinilService } from './buy-vinil.service';

describe('BuyVinilService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BuyVinilService = TestBed.get(BuyVinilService);
    expect(service).toBeTruthy();
  });
});
