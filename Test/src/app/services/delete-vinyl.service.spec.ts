import { TestBed } from '@angular/core/testing';

import { DeleteVinylService } from './delete-vinyl.service';

describe('DeleteVinylService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DeleteVinylService = TestBed.get(DeleteVinylService);
    expect(service).toBeTruthy();
  });
});
