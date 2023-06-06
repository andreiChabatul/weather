import { Component } from '@angular/core';

@Component({
  selector: 'app-uv-index',
  templateUrl: './uv-index.component.html',
  styleUrls: ['./uv-index.component.scss'],
})
export class UvIndexComponent {
  value = 5;

  rotate = `transform: rotate(${-105 + 15 * this.value}deg)`;
}
