import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ICoordinate, IOpenweathermap } from 'src/app/store/models/openweathermap';
import { OPENWEATHERMA_API, URL_OPENWEATHERMAP } from '../const/const';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OpenweathermapApiService {

  constructor(private http: HttpClient) { }

  getWeatherCity(coor: ICoordinate): Observable<IOpenweathermap> {
    return this.http.get<IOpenweathermap>(
      URL_OPENWEATHERMAP, {
      params: {
        lat: coor.lat,
        lon: coor.lon,
        units: 'metric',
        lang: 'ru',
        appid: OPENWEATHERMA_API
      }
    }
    )
  }
}
