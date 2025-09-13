import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UniWorldComponent } from './uni-world.component';

describe('UniWorldComponent', () => {
  let component: UniWorldComponent;
  let fixture: ComponentFixture<UniWorldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UniWorldComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UniWorldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
