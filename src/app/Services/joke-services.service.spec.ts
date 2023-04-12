import { TestBed } from '@angular/core/testing';

import { JokeServicesService } from './joke-services.service';

describe('JokeServicesService', () => {
  let service: JokeServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JokeServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
