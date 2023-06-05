import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { OpenPopUp } from 'src/app/store/actions/actions';
import { IItemForecast } from 'src/app/store/models/openweathermap';
import { IAppStore } from 'src/app/store/models/stateModel';

@Component({
  selector: 'app-item-five-day-forecast',
  templateUrl: './item-five-day-forecast.component.html',
  styleUrls: ['./item-five-day-forecast.component.scss']
})
export class ItemFiveDayForecastComponent {

  @Input() item: IItemForecast;
  @Input() index: number;
  @Input() isOpen: boolean;

  constructor(private store: Store<IAppStore>) { }

  openPopUp(): void {
    this.store.dispatch(new OpenPopUp({ popUpType: 'infoWeather', item: this.index }));
  }
}
