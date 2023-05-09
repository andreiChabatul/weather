import { Component } from '@angular/core';

@Component({
  selector: 'app-slider-weather',
  templateUrl: './slider-weather.component.html',
  styleUrls: ['./slider-weather.component.scss']
})
export class SliderWeatherComponent {

  tempArr = ['Moscow', 'Minsk', 'Mogilev', 'kol'];

  str = ''
  styleArr = this.tempArr.map((item, index) => {
    return {
      id: index,
      transform: `translateX(${20 * index}px) translateY(${-10 * index}px) rotate(${5 * index}deg)`,
      background: '#' + Math.floor(Math.random() * 16777215).toString(16),
      zindex: 10 - index,
      info: item
    }
  })

  clickItem(index: number) {
    console.log(index);
    console.log(this.styleArr);
    console.log(this.styleArr[0]);
    console.log(this.styleArr[index]);
    [this.styleArr[0].id, this.styleArr[index].id] = [this.styleArr[index].id, this.styleArr[0].id];
    [this.styleArr[0].transform, this.styleArr[index].transform] = [this.styleArr[index].transform, this.styleArr[0].transform];
    

  }


}
