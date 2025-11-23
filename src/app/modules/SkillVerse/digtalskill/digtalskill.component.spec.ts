import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DigtalskillComponent } from './digtalskill.component';

describe('DigtalskillComponent', () => {
  let component: DigtalskillComponent;
  let fixture: ComponentFixture<DigtalskillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DigtalskillComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DigtalskillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
