import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RobotsTxtComponent } from './robots.txt.component';

describe('RobotsTxtComponent', () => {
  let component: RobotsTxtComponent;
  let fixture: ComponentFixture<RobotsTxtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RobotsTxtComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RobotsTxtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
