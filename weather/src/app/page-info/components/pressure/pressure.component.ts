import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pressure',
  templateUrl: './pressure.component.html',
  styleUrls: ['./pressure.component.scss'],
})
export class PressureComponent {
  @Input() value: number;
}
