import { Component, Input, OnDestroy, OnChanges } from '@angular/core';
import { Store } from '@ngrx/store';
import { DeleteFavorite } from 'src/app/store/actions/actions';
import { IAppStore } from 'src/app/store/models/stateModel';
import { Observable, Subscription, map, mergeMap, switchMap } from 'rxjs';
import { ICoordinate, IOpenweathermap } from 'src/app/store/models/openweathermap';
import { GeocodingApiService } from 'src/app/core/services/geocoding-api.service';
import { OpenweathermapApiService } from 'src/app/core/services/openweathermap-api.service';
import { IOpenweathermapForecastFive } from 'src/app/store/models/openweathermap';

@Component({
  selector: 'app-phone-main-info',
  templateUrl: './phone-main-info.component.html',
  styleUrls: ['./phone-main-info.component.scss']
})
export class PhoneMainInfoComponent implements OnChanges, OnDestroy {

  @Input() coor: ICoordinate;
  weatherInfo$: Subscription;
  weatherInfoForecast$: Subscription;
  weatherInfo: IOpenweathermap;
  weatherInfoForecast: IOpenweathermapForecastFive;

  constructor(
    private store: Store<IAppStore>,
    private openweathermapApiService: OpenweathermapApiService) { }

  ngOnChanges(): void {
    this.weatherInfo$ = this.openweathermapApiService.getWeather<IOpenweathermap>(this.coor, 'weather'
    ).subscribe(info => this.weatherInfo = info);
  }

  deleteCity(): void {
    this.store.dispatch(new DeleteFavorite(this.coor));
  }

  ngOnDestroy(): void {
    this.weatherInfo$.unsubscribe();
  }
}
