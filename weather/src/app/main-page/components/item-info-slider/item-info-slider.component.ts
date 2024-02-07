import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { OpenweathermapApiService } from 'src/app/core/services/openweathermap-api.service';
import { IOpenweathermap } from 'src/app/store/models/openweathermap';
import { IFavoriteCity } from '../favorite-container/favorite-container.component';
import { Store } from '@ngrx/store';
import { IAppStore } from 'src/app/store/models/stateModel';
import { SelectFavorite } from 'src/app/store/actions/actions';

@Component({
  selector: 'app-item-info-slider',
  templateUrl: './item-info-slider.component.html',
  styleUrls: ['./item-info-slider.component.scss'],
})
export class ItemInfoSliderComponent implements OnInit {
  @Input() item: IFavoriteCity;


  weatherCity$: Observable<IOpenweathermap>;

  constructor(
    private openweathermapApiService: OpenweathermapApiService,
    private store: Store<IAppStore>
  ) { }

  ngOnInit(): void {
    this.weatherCity$ = this.openweathermapApiService
      .getWeather<IOpenweathermap>(this.item.coor, 'weather')
  }

  clickSliderItem(): void {
    this.store.dispatch(new SelectFavorite(this.item.coor));
  }

}
