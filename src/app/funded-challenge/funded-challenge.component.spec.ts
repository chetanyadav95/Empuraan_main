import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FundedChallengeComponent } from './funded-challenge.component';

describe('FundedChallengeComponent', () => {
  let component: FundedChallengeComponent;
  let fixture: ComponentFixture<FundedChallengeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FundedChallengeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FundedChallengeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
