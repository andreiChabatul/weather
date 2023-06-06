import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { ChangeLanguage } from 'src/app/store/actions/actions';
import { ILang, LanguageType } from 'src/app/store/models/settingModel';
import { IAppStore } from 'src/app/store/models/stateModel';
import { selectLanguage } from 'src/app/store/selectors/selectors';

@Component({
  selector: 'app-change-language',
  templateUrl: './change-language.component.html',
  styleUrls: ['./change-language.component.scss'],
})
export class ChangeLanguageComponent {
  lang: ILang[] = [
    { value: 'en', img: './../../../../assets/icoLang/eng.png' },
    { value: 'ru', img: './../../../../assets/icoLang/rus.png' },
  ];

  selectedLang$ = this.store.select(selectLanguage);

  constructor(private store: Store<IAppStore>) {}

  selectLanguage(value: LanguageType) {
    this.store.dispatch(new ChangeLanguage(value));
  }
}
