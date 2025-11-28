import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AIPromptFormComponent } from './aiprompt-form.component';

describe('AIPromptFormComponent', () => {
  let component: AIPromptFormComponent;
  let fixture: ComponentFixture<AIPromptFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AIPromptFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AIPromptFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
