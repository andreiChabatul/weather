import { Pipe, PipeTransform } from '@angular/core';
import { Store } from '@ngrx/store';
import { IAppStore } from '../../store/models/stateModel';
import { selectLanguage } from '../../store/selectors/selectors';
import { Observable, map } from 'rxjs';

@Pipe({
    name: 'timeConvert'
})
export class TimeConvertPipe implements PipeTransform {

    lang$ = this.store.select(selectLanguage);

    constructor(private store: Store<IAppStore>) { }

    transform(value: number): Observable<string> {
        const restDay = (value * 1000) - (+new Date());
        const hours = Math.floor(restDay / 3600000);
        const minutes = ("0" + Math.floor((restDay - hours * 3600000) / 60000)).substring(1);

        return this.lang$.pipe(
            map(lang => {
                switch (lang) {
                    case 'en':
                        return `${hours}h ${minutes}min`;
                    case 'ru':
                        return `${hours}ч ${minutes}мин`;
                    default:
                        return '';
                }
            }
            ))
    }
}