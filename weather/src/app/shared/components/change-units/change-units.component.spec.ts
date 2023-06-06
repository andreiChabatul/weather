import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeUnitsComponent } from './change-units.component';

describe('ChangeUnitsComponent', () => {
  let component: ChangeUnitsComponent;
  let fixture: ComponentFixture<ChangeUnitsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChangeUnitsComponent],
    });
    fixture = TestBed.createComponent(ChangeUnitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
