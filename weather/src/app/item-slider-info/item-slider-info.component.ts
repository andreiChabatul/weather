import { Component, Input } from '@angular/core';

interface IItemSlider {
  nameCity: string;
  temp: number;
  chanceRain: number;
  type: string;
  extraInfo: {
    type: string;
    temp: number;
    time: number
  }[];
}


@Component({
  selector: 'app-item-slider-info',
  templateUrl: './item-slider-info.component.html',
  styleUrls: ['./item-slider-info.component.scss']
})
export class ItemSliderInfoComponent {

  @Input() item: IItemSlider;

  imgType = './../../assets/icoWeather/sun.png'

}
