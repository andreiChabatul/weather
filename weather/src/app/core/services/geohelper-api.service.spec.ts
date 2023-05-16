import { TestBed } from '@angular/core/testing';

import { GeohelperApiService } from './geohelper-api.service';

describe('GeohelperApiService', () => {
  let service: GeohelperApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GeohelperApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
