import { Pipe, PipeTransform } from '@angular/core';
import { Store } from '@ngrx/store';
import { IAppStore } from '../../store/models/stateModel';
import { selectLanguage, selectUnits } from '../../store/selectors/selectors';
import { Observable, map, mergeMap } from 'rxjs';

@Pipe({
    name: 'visibilityPipe'
})
export class VisibilityPipe implements PipeTransform {

    visibiliTyInfo = {
        en: {
            imperial: 'mile',
            metric: 'km'
        },
        ru: {
            imperial: 'миль',
            metric: 'км'
        }
    }

    units$ = this.store.select(selectUnits);
    lang$ = this.store.select(selectLanguage);

    constructor(private store: Store<IAppStore>) { }

    transform(value: number): Observable<string> {

        return this.lang$.pipe(
            mergeMap(lang => this.units$.pipe(
                map(units => {
                    let result = value;
                    if (units === 'imperial') { result = value * 1.6 }
                    return `${(result / 1000).toFixed(1)} ${this.visibiliTyInfo[lang][units]}`
                }
                )
            ))
        )

    }
}
