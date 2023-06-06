import { Component, Input, OnInit } from '@angular/core';
import { IWind } from 'src/app/store/models/openweathermap';

@Component({
  selector: 'app-wind',
  templateUrl: './wind.component.html',
  styleUrls: ['./wind.component.scss'],
})
export class WindComponent implements OnInit {
  @Input() value: IWind;

  rotate: string;

  ngOnInit(): void {
    this.rotate = `transform: rotate(${this.value.deg}deg)`;
  }
}
