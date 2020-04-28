import { TestBed } from '@angular/core/testing';

import { CountryWiseDataService } from './country-wise-data.service';

describe('CountryWiseDataService', () => {
  let service: CountryWiseDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CountryWiseDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
