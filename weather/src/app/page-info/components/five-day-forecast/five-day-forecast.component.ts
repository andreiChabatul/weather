import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { IAppStore } from 'src/app/store/models/stateModel';
import { selectForecast } from 'src/app/store/selectors/selectors';

@Component({
  selector: 'app-five-day-forecast',
  templateUrl: './five-day-forecast.component.html',
  styleUrls: ['./five-day-forecast.component.scss']
})
export class FiveDayForecastComponent {

  itemArray = this.store.select(selectForecast)

  constructor(private store: Store<IAppStore>) { }
}
