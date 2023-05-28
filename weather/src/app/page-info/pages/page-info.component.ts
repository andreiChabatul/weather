import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription, switchMap } from 'rxjs';
import { GeocodingApiService } from 'src/app/core/services/geocoding-api.service';
import { OpenweathermapApiService } from 'src/app/core/services/openweathermap-api.service';
import { AddItemForecast } from 'src/app/store/actions/actions';
import { ICoordinate, IOpenweathermap } from 'src/app/store/models/openweathermap';
import { IAppStore } from 'src/app/store/models/stateModel';

@Component({
  selector: 'app-page-info',
  templateUrl: './page-info.component.html',
  styleUrls: ['./page-info.component.scss']
})
export class PageInfoComponent implements OnInit, OnDestroy {
  private querySubscription: Subscription;
  weatherCity: IOpenweathermap;
  city: string;
  loading: boolean = true;

  constructor(
    private route: ActivatedRoute,
    private geocodingApiService: GeocodingApiService,
    private openweathermapApiService: OpenweathermapApiService,
    private store: Store<IAppStore>,
  ) { }

  ngOnInit(): void {
    this.querySubscription = this.route.queryParams.pipe(
      switchMap(value => {
        this.city = value['city'];
        return this.geocodingApiService.getCoordinate(this.city);
      }),
      switchMap((coordinate) => {
        if (coordinate.length) {
          this.openweathermapApiService.getWeatherForecat(coordinate[0]
          ).subscribe(value => this.store.dispatch(new AddItemForecast(value)));
          return this.openweathermapApiService.getWeatherCity(coordinate[0]);
        } else {
          this.loading = false;
          return [];
        }
      })
    ).subscribe(value => {
      this.loading = false;
      this.weatherCity = value;
    });


  }

  ngOnDestroy(): void {
    this.querySubscription.unsubscribe();
  }
}
