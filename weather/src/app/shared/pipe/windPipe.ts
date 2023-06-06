import { Pipe, PipeTransform } from '@angular/core';
import { Store } from '@ngrx/store';
import { IAppStore } from '../../store/models/stateModel';
import { selectLanguage, selectUnits } from '../../store/selectors/selectors';
import { Observable, map, mergeMap } from 'rxjs';

@Pipe({
  name: 'windPipe',
})
export class WindPipe implements PipeTransform {
  windInfo = {
    en: {
      imperial: 'mi/h',
      metric: 'm/s',
    },
    ru: {
      imperial: 'мил/ч',
      metric: 'м/с',
    },
  };

  units$ = this.store.select(selectUnits);

  lang$ = this.store.select(selectLanguage);

  constructor(private store: Store<IAppStore>) {}

  transform(value: number): Observable<string> {
    return this.lang$.pipe(
      mergeMap((lang) =>
        this.units$.pipe(
          map((units) => `${value} ${this.windInfo[lang][units]}`)
        )
      )
    );
  }
}
