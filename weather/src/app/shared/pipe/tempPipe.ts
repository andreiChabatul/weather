import { Pipe, PipeTransform } from '@angular/core';
import { Store } from '@ngrx/store';
import { IAppStore } from '../../store/models/stateModel';
import { selectUnits } from '../../store/selectors/selectors';
import { Observable, map } from 'rxjs';

@Pipe({
  name: 'tempPipe',
})
export class TempPipe implements PipeTransform {
  units$ = this.store.select(selectUnits);

  constructor(private store: Store<IAppStore>) {}

  transform(value: number): Observable<string> {
    return this.units$.pipe(
      map((unit) => {
        switch (unit) {
          case 'metric':
            return `${value.toFixed(1)}℃`;
          case 'imperial':
            return `${value.toFixed(1)}℉`;
          default:
            return '';
        }
      })
    );
  }
}
