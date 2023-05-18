import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlHistoryComponent } from './control-history.component';

describe('ControlHistoryComponent', () => {
  let component: ControlHistoryComponent;
  let fixture: ComponentFixture<ControlHistoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ControlHistoryComponent]
    });
    fixture = TestBed.createComponent(ControlHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
