import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemInfoSliderComponent } from './item-info-slider.component';

describe('ItemInfoSliderComponent', () => {
  let component: ItemInfoSliderComponent;
  let fixture: ComponentFixture<ItemInfoSliderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ItemInfoSliderComponent],
    });
    fixture = TestBed.createComponent(ItemInfoSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
