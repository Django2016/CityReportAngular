import { TestBed } from '@angular/core/testing';

import { CityReportService } from './city-report.service';

describe('CityReportService', () => {
  let service: CityReportService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CityReportService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
