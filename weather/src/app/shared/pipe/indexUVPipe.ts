import { Pipe, PipeTransform } from '@angular/core';
import { Store } from '@ngrx/store';
import { IAppStore } from '../../store/models/stateModel';
import { selectLanguage } from '../../store/selectors/selectors';
import { Observable, map } from 'rxjs';

@Pipe({
    name: 'indexUVPipe'
})
export class IndexUVPipe implements PipeTransform {

    lang$ = this.store.select(selectLanguage);

    constructor(private store: Store<IAppStore>) { }
    engIndex: string[] = ['Low radiation', 'Intense radiation', 'Extreme level of radiation'];
    rusIndex: string[] = ['Низкий уровень излучения', 'Интенсивное излучение', 'Экстремальный уровень излучения'];

    transform(value: number): Observable<string> {

        return this.lang$.pipe(
            map(lang => {
                switch (lang) {
                    case 'en':
                        return this.engIndex[this.setSelect(value)];
                    case 'ru':
                        return this.rusIndex[this.setSelect(value)];
                    default:
                        return '';
                }
            }
            ))
    }

    private setSelect(value: number): number {

        if (value < 3) {
            return 0;
        } else if (value > 2 && value < 8) {
            return 1;
        } else {
            return 2;
        }
    }
}