import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AIPromptComponent } from './aiprompt.component';

describe('AIPromptComponent', () => {
  let component: AIPromptComponent;
  let fixture: ComponentFixture<AIPromptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AIPromptComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AIPromptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
