import { Component } from '@angular/core';
import { IUnits } from 'src/app/store/models/settingModel';

@Component({
  selector: 'app-change-units',
  templateUrl: './change-units.component.html',
  styleUrls: ['./change-units.component.scss']
})
export class ChangeUnitsComponent {

  units: IUnits[] = [
    { value: 'metric', text: '℃' },
    { value: 'imperial', text: '℉' }
  ];

}
