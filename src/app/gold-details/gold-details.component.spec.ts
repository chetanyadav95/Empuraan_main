import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoldDetailsComponent } from './gold-details.component';

describe('GoldDetailsComponent', () => {
  let component: GoldDetailsComponent;
  let fixture: ComponentFixture<GoldDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoldDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoldDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
