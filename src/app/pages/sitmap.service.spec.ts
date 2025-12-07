import { TestBed } from '@angular/core/testing';

import { SitmapService } from './sitmap.service';

describe('SitmapService', () => {
  let service: SitmapService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SitmapService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
