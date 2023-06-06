import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { IOpenweathermapForecastFive } from 'src/app/store/models/openweathermap';
import { IAppStore } from 'src/app/store/models/stateModel';
import { selectForecast, selectPopUp } from 'src/app/store/selectors/selectors';

@Component({
  selector: 'app-extra-info-forecast',
  templateUrl: './extra-info-forecast.component.html',
  styleUrls: ['./extra-info-forecast.component.scss'],
})
export class ExtraInfoForecastComponent implements OnInit, OnDestroy {
  day: number;

  subscription$: Subscription;

  subscriptionTwo$: Subscription;

  popUpInfo$ = this.store.select(selectPopUp);

  cityInfo$ = this.store.select(selectForecast);

  forecastInfo: IOpenweathermapForecastFive;

  index: number;

  constructor(private store: Store<IAppStore>) {}

  ngOnInit(): void {
    this.subscription$ = this.cityInfo$.subscribe(
      (value) => (this.forecastInfo = value)
    );
    this.subscriptionTwo$ = this.popUpInfo$.subscribe((value) =>
      value.item !== undefined ? (this.index = value.item) : ''
    );
    this.day = new Date(this.forecastInfo.list[this.index].dt * 1000).getDay();
  }

  ngOnDestroy(): void {
    this.subscription$.unsubscribe();
    this.subscriptionTwo$.unsubscribe();
  }
}
