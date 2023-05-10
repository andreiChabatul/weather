import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemSliderInfoComponent } from './item-slider-info.component';

describe('ItemSliderInfoComponent', () => {
  let component: ItemSliderInfoComponent;
  let fixture: ComponentFixture<ItemSliderInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ItemSliderInfoComponent]
    });
    fixture = TestBed.createComponent(ItemSliderInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
