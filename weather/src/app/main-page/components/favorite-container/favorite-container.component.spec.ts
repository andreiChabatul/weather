import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoriteContainerComponent } from './favorite-container.component';

describe('FavoriteContainerComponent', () => {
  let component: FavoriteContainerComponent;
  let fixture: ComponentFixture<FavoriteContainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FavoriteContainerComponent]
    });
    fixture = TestBed.createComponent(FavoriteContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
