import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SouthIndianComponent } from './south-indian.component';

describe('SouthIndianComponent', () => {
  let component: SouthIndianComponent;
  let fixture: ComponentFixture<SouthIndianComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SouthIndianComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SouthIndianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
