import { TestBed } from '@angular/core/testing';

import { CreateVinilService } from './create-vinil.service';

describe('CreateVinilService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CreateVinilService = TestBed.get(CreateVinilService);
    expect(service).toBeTruthy();
  });
});
