import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhoneMainInfoComponent } from './phone-main-info.component';

describe('PhoneMainInfoComponent', () => {
  let component: PhoneMainInfoComponent;
  let fixture: ComponentFixture<PhoneMainInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PhoneMainInfoComponent]
    });
    fixture = TestBed.createComponent(PhoneMainInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
