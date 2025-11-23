import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItskillComponent } from './itskill.component';

describe('ItskillComponent', () => {
  let component: ItskillComponent;
  let fixture: ComponentFixture<ItskillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItskillComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ItskillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
