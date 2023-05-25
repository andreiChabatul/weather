import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemFiveDayForecastComponent } from './item-five-day-forecast.component';

describe('ItemFiveDayForecastComponent', () => {
  let component: ItemFiveDayForecastComponent;
  let fixture: ComponentFixture<ItemFiveDayForecastComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ItemFiveDayForecastComponent]
    });
    fixture = TestBed.createComponent(ItemFiveDayForecastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
