import { Component, Input } from '@angular/core';
import { IOpenweathermap } from 'src/app/store/models/openweathermap';

@Component({
  selector: 'app-info-general',
  templateUrl: './info-general.component.html',
  styleUrls: ['./info-general.component.scss']
})
export class InfoGeneralComponent {

  @Input() info: IOpenweathermap;
  date = new Date()
  day = this.date.getDay();
  time = `${this.date.getHours()}:${('0' + this.date.getMinutes()).slice(-2)}`;

}
