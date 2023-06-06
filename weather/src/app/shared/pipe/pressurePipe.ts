import { Pipe, PipeTransform } from '@angular/core';
import { Store } from '@ngrx/store';
import { IAppStore } from '../../store/models/stateModel';
import { selectLanguage } from '../../store/selectors/selectors';
import { Observable, map } from 'rxjs';

@Pipe({
  name: 'pressurePipe',
})
export class PressurePipe implements PipeTransform {
  lang$ = this.store.select(selectLanguage);

  constructor(private store: Store<IAppStore>) {}

  transform(value: number): Observable<string> {
    const RATIO = 0.75006375541921;
    return this.lang$.pipe(
      map((lang) => {
        switch (lang) {
          case 'en':
            return `${(RATIO * value).toFixed(2)} mm Hg`;
          case 'ru':
            return `${(RATIO * value).toFixed(2)} мм рт.ст.`;
          default:
            return '';
        }
      })
    );
  }
}
