import { Component, Input, OnDestroy, OnChanges } from '@angular/core';
import { Store } from '@ngrx/store';
import { DeleteFavorite } from 'src/app/store/actions/actions';
import { IAppStore } from 'src/app/store/models/stateModel';
import { Observable, Subscription, map, mergeMap, switchMap } from 'rxjs';
import { IOpenweathermap } from 'src/app/store/models/openweathermap';
import { GeocodingApiService } from 'src/app/core/services/geocoding-api.service';
import { OpenweathermapApiService } from 'src/app/core/services/openweathermap-api.service';
import { IOpenweathermapForecastFive } from 'src/app/store/models/openweathermap';

@Component({
  selector: 'app-phone-main-info',
  templateUrl: './phone-main-info.component.html',
  styleUrls: ['./phone-main-info.component.scss']
})
export class PhoneMainInfoComponent implements OnChanges, OnDestroy {

  @Input() cityName: string;
  weatherInfo$: Subscription;
  weatherInfo: IOpenweathermap;
  weatherInfoForecast: IOpenweathermapForecastFive;

  constructor(
    private store: Store<IAppStore>,
    private geocodingApiService: GeocodingApiService,
    private openweathermapApiService: OpenweathermapApiService) { }

  ngOnChanges(): void {
    this.weatherInfo$ = this.geocodingApiService.getCoordinate(this.cityName).pipe(
      mergeMap(coor => {
        if (coor[0]) {
          this.openweathermapApiService.getWeather<IOpenweathermapForecastFive>(coor[0], 'forecast'
          ).subscribe(value => this.weatherInfoForecast = value);
          return this.openweathermapApiService.getWeather<IOpenweathermap>(coor[0], 'weather');
        } else { return [] }
      })
    ).subscribe(info => this.weatherInfo = info)
  }

  deleteCity(): void {
    this.store.dispatch(new DeleteFavorite(this.cityName));
  }

  ngOnDestroy(): void {
    this.weatherInfo$.unsubscribe();
  }
}
