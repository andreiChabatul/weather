import { Pipe, PipeTransform } from '@angular/core';
import { Store } from '@ngrx/store';
import { IAppStore } from '../../store/models/stateModel';
import { selectLanguage } from '../../store/selectors/selectors';
import { Observable, map } from 'rxjs';

@Pipe({
    name: 'dayWeek'
})
export class DayWeek implements PipeTransform {

    lang$ = this.store.select(selectLanguage);
    engDay: string[] = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    rusDay: string[] = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];

    constructor(private store: Store<IAppStore>) { }

    transform(value: number): Observable<string> {
        const day = new Date(value * 1000).getDay();
        return this.lang$.pipe(
            map(lang => {
                switch (lang) {
                    case 'en':
                        return this.engDay[day];
                    case 'ru':
                        return this.rusDay[day];
                    default:
                        return '';
                }
            }
            ))
    }

}