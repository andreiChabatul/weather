import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, expand, EMPTY } from 'rxjs';
import { IApiGeohelper } from '../models/apiGeohelper';
import { URL_GEOHELPER, URL_GEOHELPER_API } from './../const/const';

@Injectable({
  providedIn: 'root'
})
export class GeohelperApiService {

  constructor(private http: HttpClient) { }
  resultCity: string[];
  page: number;

  getAllCity(value: string): string[] {
    this.page = 1;
    this.resultCity = [];
    this.getCity(value, this.page).pipe(
      expand(resp => {
        for (const city of resp.result) {
          this.resultCity.push(city.name);
        }
        if (resp.pagination.totalPageCount > this.page) {
          this.page += 1;
          return this.getCity(value, this.page);
        }
        else {
          return EMPTY;
        }
      })).subscribe(v => v.result.filter(city =>
        city.localityType && (city.localityType.name === 'город' || city.localityType.name === 'city')).map(
          city => console.log(city.name)
        ));





    return ['fd', 'fd']

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


