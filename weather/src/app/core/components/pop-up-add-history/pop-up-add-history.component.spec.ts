import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopUpAddHistoryComponent } from './pop-up-add-history.component';

describe('PopUpAddHistoryComponent', () => {
  let component: PopUpAddHistoryComponent;
  let fixture: ComponentFixture<PopUpAddHistoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PopUpAddHistoryComponent]
    });
    fixture = TestBed.createComponent(PopUpAddHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
