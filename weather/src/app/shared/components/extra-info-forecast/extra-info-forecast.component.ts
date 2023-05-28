import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { IItemForecast } from 'src/app/store/models/openweathermap';
import { IAppStore } from 'src/app/store/models/stateModel';
import { selectPopUp } from 'src/app/store/selectors/selectors';

@Component({
  selector: 'app-extra-info-forecast',
  templateUrl: './extra-info-forecast.component.html',
  styleUrls: ['./extra-info-forecast.component.scss']
})
export class ExtraInfoForecastComponent implements OnInit, OnDestroy {

  item: IItemForecast;
  day: number;
  subscription$: Subscription;
  popUpInfo$ = this.store.select(selectPopUp);

  constructor(private store: Store<IAppStore>) { }

  ngOnInit(): void {
    this.subscription$ = this.popUpInfo$.subscribe(
      value => value.itemInfo ? this.item = value.itemInfo : ''
    )
    this.day = new Date(this.item.dt * 1000).getDay();
  }
  ngOnDestroy(): void {
    this.subscription$.unsubscribe();
  }

}
