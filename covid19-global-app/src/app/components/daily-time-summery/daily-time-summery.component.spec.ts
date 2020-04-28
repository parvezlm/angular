import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyTimeSummeryComponent } from './daily-time-summery.component';

describe('DailyTimeSummeryComponent', () => {
  let component: DailyTimeSummeryComponent;
  let fixture: ComponentFixture<DailyTimeSummeryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DailyTimeSummeryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DailyTimeSummeryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
