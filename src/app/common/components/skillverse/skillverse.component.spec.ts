import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillverseComponent } from './skillverse.component';

describe('SkillverseComponent', () => {
  let component: SkillverseComponent;
  let fixture: ComponentFixture<SkillverseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkillverseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SkillverseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
