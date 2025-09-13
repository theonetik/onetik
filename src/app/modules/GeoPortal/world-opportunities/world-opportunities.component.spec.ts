import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorldOpportunitiesComponent } from './world-opportunities.component';

describe('WorldOpportunitiesComponent', () => {
  let component: WorldOpportunitiesComponent;
  let fixture: ComponentFixture<WorldOpportunitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorldOpportunitiesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WorldOpportunitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
