import { TestBed } from '@angular/core/testing';

import { CoinkService } from './coink.service';

describe('CoinkService', () => {
  let service: CoinkService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CoinkService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
