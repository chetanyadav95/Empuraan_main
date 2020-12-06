import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FundedProgramComponent } from './funded-program.component';

describe('FundedProgramComponent', () => {
  let component: FundedProgramComponent;
  let fixture: ComponentFixture<FundedProgramComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FundedProgramComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FundedProgramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
