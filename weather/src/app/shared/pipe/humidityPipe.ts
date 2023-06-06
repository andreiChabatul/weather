import { Pipe, PipeTransform } from '@angular/core';
import { Store } from '@ngrx/store';
import { IAppStore } from '../../store/models/stateModel';
import { selectLanguage } from '../../store/selectors/selectors';
import { Observable, map } from 'rxjs';

@Pipe({
  name: 'humidityPipe',
})
export class HumidityPipe implements PipeTransform {
  lang$ = this.store.select(selectLanguage);

  constructor(private store: Store<IAppStore>) {}

  engHumidity: string[] = [
    'Very dry air',
    'Dry air',
    'Moderately dry air',
    'Moderately humid air',
    'Very humid air',
  ];

  rusHumidity: string[] = [
    'Очень сухой воздух',
    'Cухой воздух',
    'Умеренно сухой воздух',
    'Умеренно влажный воздух',
    'Очень влажный воздух',
  ];

  transform(value: number): Observable<string> {
    return this.lang$.pipe(
      map((lang) => {
        switch (lang) {
          case 'en':
            return this.engHumidity[this.setSelect(value)];
          case 'ru':
            return this.rusHumidity[this.setSelect(value)];
          default:
            return '';
        }
      })
    );
  }

  private setSelect(value: number): number {
    if (value < 31) {
      return 0;
    } else if (value > 29 && value < 55) {
      return 1;
    } else if (value > 54 && value < 71) {
      return 2;
    } else if (value > 69 && value < 85) {
      return 3;
    } else {
      return 4;
    }
  }
}
