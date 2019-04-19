import { TestBed } from '@angular/core/testing';

import { GardsService } from './gards.service';

describe('GardsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GardsService = TestBed.get(GardsService);
    expect(service).toBeTruthy();
  });
});
