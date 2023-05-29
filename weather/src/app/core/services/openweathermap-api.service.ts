import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ICoordinate } from 'src/app/store/models/openweathermap';
import { OPENWEATHERMA_API, URL_OPENWEATHERMAP } from '../const/const';
import { Observable, mergeMap } from 'rxjs';
import { Store } from '@ngrx/store';
import { IAppStore } from 'src/app/store/models/stateModel';
import { selectLanguage, selectUnits } from 'src/app/store/selectors/selectors';

type typeReguest = 'weather' | 'forecast';

@Injectable({
  providedIn: 'root'
})
export class OpenweathermapApiService {
  units$ = this.store.select(selectUnits);
  lang$ = this.store.select(selectLanguage);

  constructor(private http: HttpClient, private store: Store<IAppStore>) { }

  getWeather<T>(coor: ICoordinate, reguest: typeReguest): Observable<T> {

    return this.lang$.pipe(
      mergeMap(lang => this.units$.pipe(
        mergeMap(units => this.http.get<T>(
          URL_OPENWEATHERMAP + reguest, {
          params: {
            lat: coor.lat,
            lon: coor.lon,
            units,
            lang,
            appid: OPENWEATHERMA_API
          }
        }
        ))
      )),
    )
  }
}
