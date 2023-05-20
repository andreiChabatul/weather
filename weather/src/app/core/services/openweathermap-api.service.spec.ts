import { TestBed } from '@angular/core/testing';

import { OpenweathermapApiService } from './openweathermap-api.service';

describe('OpenweathermapApiService', () => {
  let service: OpenweathermapApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OpenweathermapApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
