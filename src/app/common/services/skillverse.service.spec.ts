import { TestBed } from '@angular/core/testing';

import { SkillverseService } from './skillverse.service';

describe('SkillverseService', () => {
  let service: SkillverseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SkillverseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
