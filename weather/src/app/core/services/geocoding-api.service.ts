import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IApiGeocoding } from '../models/apiGeocoding';
import { OPENWEATHERMA_API, URL_GEOCODING } from '../const/const';

@Injectable({
  providedIn: 'root'
})
export class GeocodingApiService {

  constructor(private http: HttpClient) { }

  getCoordinate(value: string): Observable<IApiGeocoding[]> {
    return this.http.get<IApiGeocoding[]>(
      URL_GEOCODING, {
      params: {
        'q': value,
        'apiKey': OPENWEATHERMA_API,
      }
    }
    )
  }
}