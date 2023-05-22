import { Component, Input } from '@angular/core';
import { IOpenweathermap } from 'src/app/store/models/openweathermap';

@Component({
  selector: 'app-info-general',
  templateUrl: './info-general.component.html',
  styleUrls: ['./info-general.component.scss']
})
export class InfoGeneralComponent {

  @Input() info: IOpenweathermap;
  day = new Date().getDay()

}
