import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChallengeStepsCardComponent } from './challenge-steps-card.component';

describe('ChallengeStepsCardComponent', () => {
  let component: ChallengeStepsCardComponent;
  let fixture: ComponentFixture<ChallengeStepsCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChallengeStepsCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChallengeStepsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
