import { Component, Input, OnDestroy, OnChanges } from '@angular/core';
import { Store } from '@ngrx/store';
import { DeleteFavorite } from 'src/app/store/actions/actions';
import { IAppStore } from 'src/app/store/models/stateModel';
import { Subscription } from 'rxjs';
import { ICoordinate, IOpenweathermap } from 'src/app/store/models/openweathermap';
import { OpenweathermapApiService } from 'src/app/core/services/openweathermap-api.service';
import { IOpenweathermapForecastFive } from 'src/app/store/models/openweathermap';
import { Router } from '@angular/router';
import { IItemForecast } from 'src/app/store/models/openweathermap';

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
  weatherInfoDate: IItemForecast[];
  weatherInfoForecast: IOpenweathermapForecastFive;

  constructor(
    private store: Store<IAppStore>,
    private openweathermapApiService: OpenweathermapApiService,
    private router: Router) { }

  ngOnChanges(): void {
    this.weatherInfo$ = this.openweathermapApiService.getWeather<IOpenweathermap>(this.coor, 'weather'
    ).subscribe(info => this.weatherInfo = info);
    this.weatherInfoForecast$ = this.openweathermapApiService.getWeather<IOpenweathermapForecastFive>(this.coor, 'forecast'
    ).subscribe(info => {
      console.log(info);
      this.weatherInfoDate = info.list.filter((value, index) => index % 8 === 0);
      this.weatherInfoForecast = info
    });
  }

  deleteCity(): void {
    this.store.dispatch(new DeleteFavorite(this.coor));
  }

  moreInfo(): void {
    this.router.navigate(['/info'], {
      queryParams: {
        'city': this.weatherInfo.name,
      }
    })
  }

  ngOnDestroy(): void {
    this.weatherInfo$.unsubscribe();
  }
}
