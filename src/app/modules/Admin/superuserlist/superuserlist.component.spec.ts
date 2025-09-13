import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperuserlistComponent } from './superuserlist.component';

describe('SuperuserlistComponent', () => {
  let component: SuperuserlistComponent;
  let fixture: ComponentFixture<SuperuserlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SuperuserlistComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SuperuserlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
