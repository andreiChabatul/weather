import { Component, Input } from '@angular/core';
import { IItemForecast } from 'src/app/store/models/openweathermap';

@Component({
  selector: 'app-phone-general-info',
  templateUrl: './phone-general-info.component.html',
  styleUrls: ['./phone-general-info.component.scss'],
})
export class PhoneGeneralInfoComponent {
  @Input() item: IItemForecast;
}
