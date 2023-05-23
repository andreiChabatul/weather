import { Component, Input, OnInit } from '@angular/core';
import { ISunrise } from 'src/app/store/models/openweathermap';

interface sunInfo {
  text: number;
  img: string;
}

@Component({
  selector: 'app-sunrise',
  templateUrl: './sunrise.component.html',
  styleUrls: ['./sunrise.component.scss']
})
export class SunriseComponent implements OnInit {

  @Input() value: ISunrise;
  sunArr: sunInfo[];
  widthBar: string;

  ngOnInit(): void {
    this.sunArr = [
      {
        text: this.value.sunrise,
        img: "./../../../../assets/infoPage/sunriseIco.png"
      },
      {
        text: this.value.sunset,
        img: "./../../../../assets/infoPage/sunset.png"
      }
    ]
    this.widthBar = `width: ${this.calcProgress()}%`;
  }

  private calcProgress(): string {
    return (100 - ((this.value.sunset * 1000) - +new Date()) / ((this.value.sunset - this.value.sunrise) * 10)).toFixed(2);
  }

}
