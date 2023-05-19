import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemInfoAddComponent } from './item-info-add.component';

describe('ItemInfoAddComponent', () => {
  let component: ItemInfoAddComponent;
  let fixture: ComponentFixture<ItemInfoAddComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ItemInfoAddComponent]
    });
    fixture = TestBed.createComponent(ItemInfoAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
