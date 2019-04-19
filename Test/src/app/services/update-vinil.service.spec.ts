import { TestBed } from '@angular/core/testing';

import { UpdateVinilService } from './update-vinil.service';

describe('UpdateVinilService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UpdateVinilService = TestBed.get(UpdateVinilService);
    expect(service).toBeTruthy();
  });
});
