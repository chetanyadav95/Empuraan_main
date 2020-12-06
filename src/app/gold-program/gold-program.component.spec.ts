import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoldProgramComponent } from './gold-program.component';

describe('GoldProgramComponent', () => {
  let component: GoldProgramComponent;
  let fixture: ComponentFixture<GoldProgramComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoldProgramComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoldProgramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
