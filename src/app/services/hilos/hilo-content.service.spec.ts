import { TestBed } from '@angular/core/testing';

import { HiloContentService } from './hilo-content.service';

describe('HiloContentService', () => {
  let service: HiloContentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HiloContentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
