import { TestBed } from '@angular/core/testing';

import { DailyTimeSummeryService } from './daily-time-summery.service';

describe('DailyTimeSummeryService', () => {
  let service: DailyTimeSummeryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DailyTimeSummeryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
