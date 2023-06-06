import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhoneGeneralInfoComponent } from './phone-general-info.component';

describe('PhoneGeneralInfoComponent', () => {
  let component: PhoneGeneralInfoComponent;
  let fixture: ComponentFixture<PhoneGeneralInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PhoneGeneralInfoComponent],
    });
    fixture = TestBed.createComponent(PhoneGeneralInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
