import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcommerceskillComponent } from './ecommerceskill.component';

describe('EcommerceskillComponent', () => {
  let component: EcommerceskillComponent;
  let fixture: ComponentFixture<EcommerceskillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EcommerceskillComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EcommerceskillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
