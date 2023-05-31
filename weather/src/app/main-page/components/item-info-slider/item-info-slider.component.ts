import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription, mergeMap, switchMap } from 'rxjs';
import { GeocodingApiService } from 'src/app/core/services/geocoding-api.service';
import { OpenweathermapApiService } from 'src/app/core/services/openweathermap-api.service';
import { IOpenweathermap } from 'src/app/store/models/openweathermap';

@Component({
  selector: 'app-item-info-slider',
  templateUrl: './item-info-slider.component.html',
  styleUrls: ['./item-info-slider.component.scss']
})
export class ItemInfoSliderComponent implements OnInit {

  cityName: string = "Новосибирск";
  private querySubscription: Subscription;
  weatherCity: IOpenweathermap;


  constructor(
    private geocodingApiService: GeocodingApiService,
    private openweathermapApiService: OpenweathermapApiService,
  ) { }

  ngOnInit(): void {
    this.querySubscription = this.geocodingApiService.getCoordinate(this.cityName).pipe(
      switchMap((coordinate) =>
        this.openweathermapApiService.getWeather<IOpenweathermap>(coordinate[0], 'weather'))
    ).subscribe(value => {
      this.weatherCity = value;
    });

  }

  ngOnDestroy(): void {
    this.querySubscription.unsubscribe();
  }



  // weatherInfo$: Subscription;
  // temp: number;
  // weatherType: number;

  // constructor(
  //   private openweathermapApiService: OpenweathermapApiService,
  //   private geocodingApiService: GeocodingApiService
  // ) { }

  // ngOnInit(): void {
  //   this.weatherInfo$ = this.geocodingApiService.getCoordinate(this.cityName).pipe(
  //     switchMap(coor => this.openweathermapApiService.getWeather<IOpenweathermap>(coor[0], 'weather'))
  //   ).subscribe(value => {
  //     this.temp = value.main.temp;
  //     this.weatherType = value.weather[0].id;
  //   });
  // }

  // ngOnDestroy(): void {
  //   this.weatherInfo$.unsubscribe();
  // }

}


