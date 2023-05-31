import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription, mergeMap } from 'rxjs';
import { GeocodingApiService } from 'src/app/core/services/geocoding-api.service';
import { OpenweathermapApiService } from 'src/app/core/services/openweathermap-api.service';
import { IOpenweathermap } from 'src/app/store/models/openweathermap';

@Component({
  selector: 'app-item-info-slider',
  templateUrl: './item-info-slider.component.html',
  styleUrls: ['./item-info-slider.component.scss']
})
export class ItemInfoSliderComponent implements OnInit {

  cityName: string = "Москва";
  weatherInfo$: Observable<IOpenweathermap>;
  weatherInfo: IOpenweathermap;

  constructor(
    private openweathermapApiService: OpenweathermapApiService,
    private geocodingApiService: GeocodingApiService
  ) { }

  ngOnInit(): void {
    this.weatherInfo$ = this.geocodingApiService.getCoordinate(this.cityName).pipe(
      mergeMap(coor => this.openweathermapApiService.getWeather<IOpenweathermap>(coor[0], 'weather'))
    );
  }

  // ngOnDestroy(): void {
  //   this.weatherInfo$.unsubscribe();
  // }

}
