import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderWeatherComponent } from './slider-weather.component';

describe('SliderWeatherComponent', () => {
  let component: SliderWeatherComponent;
  let fixture: ComponentFixture<SliderWeatherComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SliderWeatherComponent]
    });
    fixture = TestBed.createComponent(SliderWeatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
