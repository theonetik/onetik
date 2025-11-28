import { TestBed } from '@angular/core/testing';

import { AIPromptService } from './aiprompt.service';

describe('AIPromptService', () => {
  let service: AIPromptService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AIPromptService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
