import { TestBed } from '@angular/core/testing';

import { IncludeIconServiceService } from './include-icon-service.service';

describe('IncludeIconServiceService', () => {
  let service: IncludeIconServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IncludeIconServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
