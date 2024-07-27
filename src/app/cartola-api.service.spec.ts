import { TestBed } from '@angular/core/testing';

import { CartolaApiService } from './cartola-api.service';

describe('CartolaApiService', () => {
  let service: CartolaApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CartolaApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
