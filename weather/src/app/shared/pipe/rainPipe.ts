import { Pipe, PipeTransform } from '@angular/core';
import { Store } from '@ngrx/store';
import { IAppStore } from '../../store/models/stateModel';
import { selectLanguage } from '../../store/selectors/selectors';
import { Observable, map } from 'rxjs';
import { IRain } from 'src/app/store/models/openweathermap';

@Pipe({
  name: 'rainPipe',
})
export class RainPipe implements PipeTransform {
  lang$ = this.store.select(selectLanguage);

  constructor(private store: Store<IAppStore>) {}

  transform(value: IRain): Observable<string> {
    if (value) {
      return this.lang$.pipe(
        map((lang) => {
          switch (lang) {
            case 'en':
              return `${value['3h']} mm/h`;
            case 'ru':
              return `${value['3h']} мм/ч`;
          }
        })
      );
    } else {
      return this.lang$.pipe(
        map((lang) => {
          switch (lang) {
            case 'en':
              return 'No precipitation';
            case 'ru':
              return 'Без осадков';
          }
        })
      );
    }
  }
}
