import { Component, Input, OnInit } from '@angular/core';
import { Subscription, switchMap } from 'rxjs';
import { GeocodingApiService } from 'src/app/core/services/geocoding-api.service';
import { OpenweathermapApiService } from 'src/app/core/services/openweathermap-api.service';
import { IOpenweathermap } from 'src/app/store/models/openweathermap';
import { IFavoriteCity } from '../favorite-container/favorite-container.component';
import { Store } from '@ngrx/store';
import { IAppStore } from 'src/app/store/models/stateModel';
import { DeleteFavorite, SelectFavorite } from 'src/app/store/actions/actions';

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
    private store: Store<IAppStore>,
  ) { }

  ngOnInit(): void {
    this.querySubscription = this.geocodingApiService.getCoordinate(this.item.city).pipe(
      switchMap((coordinate) => {
        if (coordinate.length > 0) {
          return this.openweathermapApiService.getWeather<IOpenweathermap>(coordinate[0], 'weather');
        } else {
          this.store.dispatch(new DeleteFavorite(this.item.city));
          return [];
        }
      })
    ).subscribe(value => {
      this.weatherCity = value;
    });
  }

  clickSliderItem(): void {
    this.store.dispatch(new SelectFavorite(this.item.city));
  }

  ngOnDestroy(): void {
    this.querySubscription.unsubscribe();
  }
}
