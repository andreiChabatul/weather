import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtraInfoForecastComponent } from './extra-info-forecast.component';

describe('ExtraInfoForecastComponent', () => {
  let component: ExtraInfoForecastComponent;
  let fixture: ComponentFixture<ExtraInfoForecastComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExtraInfoForecastComponent],
    });
    fixture = TestBed.createComponent(ExtraInfoForecastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
