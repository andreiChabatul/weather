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

  @Input() info: ISunrise;
  sunArr: sunInfo[];
  widthBar: string;

  ngOnInit(): void {
    this.sunArr = [
      {
        text: this.info.sunrise,
        img: "./../../../../assets/infoPage/sunriseIco.png"
      },
      {
        text: this.info.sunset,
        img: "./../../../../assets/infoPage/sunset.png"
      }
    ]
    this.widthBar = `width: ${this.calcProgress()}%`;
  }

  private calcProgress(): string {
    return (100 - ((this.info.sunset * 1000) - +new Date()) / ((this.info.sunset - this.info.sunrise) * 10)).toFixed(2);
  }

}
