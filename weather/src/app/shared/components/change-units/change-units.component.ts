import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { ChangeUnits } from 'src/app/store/actions/actions';
import { IUnits, UnitsType } from 'src/app/store/models/settingModel';
import { IAppStore } from 'src/app/store/models/stateModel';
import { selectUnits } from 'src/app/store/selectors/selectors';

@Component({
  selector: 'app-change-units',
  templateUrl: './change-units.component.html',
  styleUrls: ['./change-units.component.scss'],
})
export class ChangeUnitsComponent {
  units: IUnits[] = [
    { value: 'metric', text: '℃' },
    { value: 'imperial', text: '℉' },
  ];

  selectedUnits$ = this.store.select(selectUnits);

  constructor(private store: Store<IAppStore>) {}

  selectUnits(value: UnitsType) {
    this.store.dispatch(new ChangeUnits(value));
  }
}
