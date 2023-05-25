import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { OpenweathermapApiService } from 'src/app/core/services/openweathermap-api.service';
import { ICoordinate, IOpenweathermapForecastFive } from 'src/app/store/models/openweathermap';

@Component({
  selector: 'app-five-day-forecast',
  templateUrl: './five-day-forecast.component.html',
  styleUrls: ['./five-day-forecast.component.scss']
})
export class FiveDayForecastComponent implements OnInit {

  @Input() coordinate: ICoordinate;
  itemArray: Observable<IOpenweathermapForecastFive>

  constructor(private openweathermapApiService: OpenweathermapApiService) { }

  ngOnInit(): void {
    this.itemArray = this.openweathermapApiService.getWeatherForecat(this.coordinate);
  }

}
