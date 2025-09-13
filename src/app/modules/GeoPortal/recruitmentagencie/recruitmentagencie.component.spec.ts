import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecruitmentagencieComponent } from './recruitmentagencie.component';

describe('RecruitmentagencieComponent', () => {
  let component: RecruitmentagencieComponent;
  let fixture: ComponentFixture<RecruitmentagencieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecruitmentagencieComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RecruitmentagencieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
