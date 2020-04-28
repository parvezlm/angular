import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryWiseDataComponent } from './country-wise-data.component';

describe('CountryWiseDataComponent', () => {
  let component: CountryWiseDataComponent;
  let fixture: ComponentFixture<CountryWiseDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountryWiseDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountryWiseDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
