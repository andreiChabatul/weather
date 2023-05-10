import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemSliderExtraInfoComponent } from './item-slider-extra-info.component';

describe('ItemSliderExtraInfoComponent', () => {
  let component: ItemSliderExtraInfoComponent;
  let fixture: ComponentFixture<ItemSliderExtraInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ItemSliderExtraInfoComponent]
    });
    fixture = TestBed.createComponent(ItemSliderExtraInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
