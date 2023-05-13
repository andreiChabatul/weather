import { Component, Input, OnInit } from '@angular/core';

export interface IItemExtra {
  type: string;
  temp: number;
  time: number;
}

@Component({
  selector: 'app-item-slider-extra-info',
  templateUrl: './item-slider-extra-info.component.html',
  styleUrls: ['./item-slider-extra-info.component.scss']
})
export class ItemSliderExtraInfoComponent implements OnInit {

  @Input() item: IItemExtra;
  itemImg: string;

  ngOnInit(): void {
    this.itemImg = `./../../assets/icoWeather/${this.item.type}.png`;
  }

}
