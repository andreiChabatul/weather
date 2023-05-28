import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReturnMainComponent } from './return-main.component';

describe('ReturnMainComponent', () => {
  let component: ReturnMainComponent;
  let fixture: ComponentFixture<ReturnMainComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReturnMainComponent]
    });
    fixture = TestBed.createComponent(ReturnMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
