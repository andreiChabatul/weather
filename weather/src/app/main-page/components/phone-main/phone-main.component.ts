import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { OpenPopUp } from 'src/app/store/actions/actions';
import { ICoordinate } from 'src/app/store/models/openweathermap';
import { IAppStore } from 'src/app/store/models/stateModel';
import { selectFavorite } from 'src/app/store/selectors/selectors';

@Component({
  selector: 'app-phone-main',
  templateUrl: './phone-main.component.html',
  styleUrls: ['./phone-main.component.scss'],
})
export class PhoneMainComponent implements OnInit, OnDestroy {
  coor: ICoordinate;

  favoriteArr$ = this.store.select(selectFavorite);

  substraction$: Subscription;

  constructor(private store: Store<IAppStore>) {}

  ngOnInit(): void {
    this.substraction$ = this.favoriteArr$.subscribe(
      (value) => (this.coor = value[value.length - 1])
    );
  }

  openPopUp() {
    this.store.dispatch(new OpenPopUp({ popUpType: 'add' }));
  }

  ngOnDestroy(): void {
    this.substraction$.unsubscribe();
  }
}
