import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomcardformComponent } from './customcardform.component';

describe('CustomcardformComponent', () => {
  let component: CustomcardformComponent;
  let fixture: ComponentFixture<CustomcardformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomcardformComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CustomcardformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
