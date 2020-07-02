import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryWiseDetailsComponent } from './country-wise-details.component';

describe('CountryWiseDetailsComponent', () => {
  let component: CountryWiseDetailsComponent;
  let fixture: ComponentFixture<CountryWiseDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountryWiseDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountryWiseDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
