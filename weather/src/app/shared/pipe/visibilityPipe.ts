import { Pipe, PipeTransform } from '@angular/core';
import { Store } from '@ngrx/store';
import { IAppStore } from '../../store/models/stateModel';
import { selectUnits } from '../../store/selectors/selectors';
import { Observable, map } from 'rxjs';

@Pipe({
    name: 'visibilityPipe'
})
export class VisibilityPipe implements PipeTransform {

    units$ = this.store.select(selectUnits);

    constructor(private store: Store<IAppStore>) { }

    transform(value: number): Observable<string> {

        return this.units$.pipe(
            map(unit => {
                switch (unit) {
                    case 'metric':
                        return `${(value / 1000).toFixed(1)}км`;
                    case 'imperial':
                        return `${(value / 1600).toFixed(1)}mi`;
                    default:
                        return '';
                }
            }
            ))
    }
}
