import { Component, Input, OnInit } from '@angular/core';
import { typeWeather } from '../core/models/weatherType';


interface IItemSlider {
  nameCity: string;
  temp: number;
  chanceRain: number;
  type: typeWeather;
  extraInfo: {
    type: typeWeather;
    temp: number;
    time: number
  }[];
}


@Component({
  selector: 'app-item-slider-info',
  templateUrl: './item-slider-info.component.html',
  styleUrls: ['./item-slider-info.component.scss']
})
export class ItemSliderInfoComponent implements OnInit {

  @Input() item: IItemSlider;

  imgType: string;

  ngOnInit(): void {
    this.imgType = `./../../assets/icoWeather/${this.item.type}.png`;
  }

}
