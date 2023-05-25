import { Component, Input, OnInit } from '@angular/core';
import { IItemForecast } from 'src/app/store/models/openweathermap';

@Component({
  selector: 'app-item-five-day-forecast',
  templateUrl: './item-five-day-forecast.component.html',
  styleUrls: ['./item-five-day-forecast.component.scss']
})
export class ItemFiveDayForecastComponent implements OnInit {

  @Input() item: IItemForecast;
  day: number;

  ngOnInit(): void {
    this.day = new Date(this.item.dt * 1000).getDay();
  }


}
