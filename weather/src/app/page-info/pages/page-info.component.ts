import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription, map, mergeMap, switchMap } from 'rxjs';
import { GeocodingApiService } from 'src/app/core/services/geocoding-api.service';
import { OpenweathermapApiService } from 'src/app/core/services/openweathermap-api.service';
import { IOpenweathermap } from 'src/app/store/models/openweathermap';

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
    private openweathermapApiService: OpenweathermapApiService) { }

  ngOnInit(): void {
    this.querySubscription = this.route.queryParams.pipe(
      switchMap(value => {
        this.city = value['city'];
        return this.geocodingApiService.getCoordinate(this.city);
      }),
      switchMap(coor => {
        if (coor.length) {
          return this.openweathermapApiService.getWeatherCity(coor[0])
        } else {
          this.loading = false;
          return [];
        }
      })
    ).subscribe(value => {
      this.loading = false;
      this.weatherCity = value;
      console.log(this.weatherCity)
    });

  }

  ngOnDestroy(): void {
    this.querySubscription.unsubscribe();
  }
}
