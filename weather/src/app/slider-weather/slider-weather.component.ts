import { Component, OnInit } from '@angular/core';
import { EWeatherType } from '../core/models/weatherType';


@Component({
  selector: 'app-slider-weather',
  templateUrl: './slider-weather.component.html',
  styleUrls: ['./slider-weather.component.scss']
})
export class SliderWeatherComponent {

  tempArr = ['Moscow', 'Minsk', 'Mogilev', 'kol', 'lok'];

  str = ''
  styleArr = this.tempArr.map((item, index) => {
    return {
      id: index,
      transform: `translateX(${20 * index}px) translateY(${-10 * index}px) rotate(${5 * index}deg)`,
      background: `rgb(${Math.random() * 200}, ${Math.random() * 200}, 147)`,
      zindex: 10 - index,
      info: {
        nameCity: 'Minsk',
        temp: 25,
        chanceRain: 90,
        type: EWeatherType.SNOW,
        extraInfo: [
          { type: EWeatherType.SUN, temp: 30, time: 2 },
          { type: EWeatherType.SNOW, temp: 30, time: 8 },
          { type: EWeatherType.THUNDERSTORM, temp: 30, time: 12 }]
      }
    }
  })




  clickItem(index: number) {
    const indexInit = this.styleArr.findIndex(el => el.id === 0);
    [this.styleArr[indexInit].transform, this.styleArr[index].transform] = [this.styleArr[index].transform, this.styleArr[indexInit].transform];
    [this.styleArr[indexInit].id, this.styleArr[index].id] = [this.styleArr[index].id, this.styleArr[indexInit].id];
    [this.styleArr[indexInit].zindex, this.styleArr[index].zindex] = [this.styleArr[index].zindex, this.styleArr[indexInit].zindex];
  }


}
