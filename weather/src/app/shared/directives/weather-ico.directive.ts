import { Directive, ElementRef, OnInit, Input } from '@angular/core';

export type weatherIcoType =
  'drizzle' | 'clear' | 'default' |
  'clouds20' | 'clouds40' | 'clouds60' |
  'clouds80' | 'rain' | 'rainFreezing' |
  'rainHeavy' | 'thunderstorm' | 'snow' | 'atmosphere';

@Directive({
  selector: '[appWeatherIco]'
})
export class WeatherIcoDirective implements OnInit {

  constructor(private el: ElementRef) { }

  @Input() weatherCode: number;

  ngOnInit(): void {
    let type: weatherIcoType = 'default';
    switch (true) {
      case this.weatherCode === 800:
        type = 'clear';
        break;
      case this.weatherCode === 801:
        type = 'clouds20';
        break;
      case this.weatherCode === 802:
        type = 'clouds40';
        break;
      case this.weatherCode === 803:
        type = 'clouds60';
        break;
      case this.weatherCode === 804:
        type = 'clouds80';
        break;
      case (this.weatherCode > 499 && this.weatherCode < 505):
        type = 'rain';
        break;
      case (this.weatherCode === 511):
        type = 'rainFreezing';
        break;
      case (this.weatherCode > 519 && this.weatherCode < 532):
        type = 'rainHeavy';
        break;
      case (Math.floor(this.weatherCode / 100) === 2):
        type = 'thunderstorm';
        break;
      case (Math.floor(this.weatherCode / 100) === 3):
        type = 'drizzle';
        break;
      case (Math.floor(this.weatherCode / 100) === 6):
        type = 'snow';
        break;
      case (Math.floor(this.weatherCode / 100) === 7):
        type = 'atmosphere';
        break;
    };
    this.el.nativeElement.src = `./../../assets/icoWeather/${type}.png`;
  }

}
