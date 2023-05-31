import { Component, Input, OnInit } from '@angular/core';
import { Subscription, switchMap } from 'rxjs';
import { GeocodingApiService } from 'src/app/core/services/geocoding-api.service';
import { OpenweathermapApiService } from 'src/app/core/services/openweathermap-api.service';
import { IOpenweathermap } from 'src/app/store/models/openweathermap';
import { IFavoriteCity } from '../favorite-container/favorite-container.component';

@Component({
  selector: 'app-item-info-slider',
  templateUrl: './item-info-slider.component.html',
  styleUrls: ['./item-info-slider.component.scss']
})
export class ItemInfoSliderComponent implements OnInit {

  @Input() item: IFavoriteCity;
  private querySubscription: Subscription;
  weatherCity: IOpenweathermap;

  constructor(
    private geocodingApiService: GeocodingApiService,
    private openweathermapApiService: OpenweathermapApiService,
  ) { }

  ngOnInit(): void {
    console.log(this.item)
    this.querySubscription = this.geocodingApiService.getCoordinate(this.item.city).pipe(
      switchMap((coordinate) =>
        this.openweathermapApiService.getWeather<IOpenweathermap>(coordinate[0], 'weather'))
    ).subscribe(value => {
      this.weatherCity = value;
    });
  }

  ngOnDestroy(): void {
    this.querySubscription.unsubscribe();
  }
}
