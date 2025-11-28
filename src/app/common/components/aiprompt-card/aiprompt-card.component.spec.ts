import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AIPromptCardComponent } from './aiprompt-card.component';

describe('AIPromptCardComponent', () => {
  let component: AIPromptCardComponent;
  let fixture: ComponentFixture<AIPromptCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AIPromptCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AIPromptCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
