import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, expand, EMPTY } from 'rxjs';
import { IApiGeohelper } from '../models/apiGeohelper';
import { URL_GEOHELPER, URL_GEOHELPER_API } from './../const/const';
import { IAppStore } from 'src/app/store/models/stateModel';
import { Store } from '@ngrx/store';
import { AddSearchCity, CleanSearchCity } from 'src/app/store/actions/actions';

@Injectable({
  providedIn: 'root'
})
export class GeohelperApiService {

  constructor(private http: HttpClient, private store: Store<IAppStore>) { }
  page: number;

  getAllCity(value: string): void {
    this.page = 1;
    this.store.dispatch(new CleanSearchCity());

    this.getCity(value, this.page).pipe(
      expand(resp => {
        if (resp.pagination.totalPageCount > this.page) {
          this.page += 1;
          return this.getCity(value, this.page);
        }
        else {
          return EMPTY;
        }
      })).subscribe(v => v.result.filter(city =>
        city.localityType && (city.localityType.name === 'город' || city.localityType.name === 'city')).map(
          city => this.store.dispatch(new AddSearchCity(city.name))
        ));
  }

  getCity(value: string, pagination: number): Observable<IApiGeohelper> {
    return this.http.get<IApiGeohelper>(
      URL_GEOHELPER, {
      params: {
        'locale[lang]': 'ru',
        'filter[name]': value,
        'pagination[limit]': 100,
        'pagination[page]': pagination,
        'apiKey': URL_GEOHELPER_API,
      }
    }
    )
  }
}


