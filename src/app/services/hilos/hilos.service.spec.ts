import { TestBed } from '@angular/core/testing';

import { HilosService } from './hilos.service';

describe('HilosService', () => {
  let service: HilosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HilosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
