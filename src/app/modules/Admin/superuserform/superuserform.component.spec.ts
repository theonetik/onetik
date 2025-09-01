import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperuserformComponent } from './superuserform.component';

describe('SuperuserformComponent', () => {
  let component: SuperuserformComponent;
  let fixture: ComponentFixture<SuperuserformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SuperuserformComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SuperuserformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
