import { TestBed } from '@angular/core/testing';

import { SubforosService } from './subforos.service';

describe('SubforosService', () => {
  let service: SubforosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SubforosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
