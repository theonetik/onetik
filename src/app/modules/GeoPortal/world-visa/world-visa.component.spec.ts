import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorldVisaComponent } from './world-visa.component';

describe('WorldVisaComponent', () => {
  let component: WorldVisaComponent;
  let fixture: ComponentFixture<WorldVisaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorldVisaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WorldVisaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
