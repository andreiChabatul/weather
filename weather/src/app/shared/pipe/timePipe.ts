import { Pipe, PipeTransform } from '@angular/core';
import { Store } from '@ngrx/store';
import { IAppStore } from '../../store/models/stateModel';
import { selectLanguage } from '../../store/selectors/selectors';
import { Observable, map } from 'rxjs';

@Pipe({
    name: 'timeFormat'
})
export class TimePipe implements PipeTransform {

    lang$ = this.store.select(selectLanguage);

    constructor(private store: Store<IAppStore>) { }


    transform(value: number): Observable<string> {
        const date = new Date(value * 1000);
        const hours = date.getHours();
        const minutes = ('0' + date.getMinutes()).slice(-2);

        return this.lang$.pipe(
            map(lang => {
                switch (lang) {
                    case 'en':
                        return (hours < 13) ? `${hours}:${minutes} AM` : `${hours - 12}:${minutes} PM`;
                    case 'ru':
                        return `${hours}:${minutes}`
                    default:
                        return '';
                }
            }
            ))
    }

}