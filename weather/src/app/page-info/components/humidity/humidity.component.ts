import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-humidity',
  templateUrl: './humidity.component.html',
  styleUrls: ['./humidity.component.scss'],
})
export class HumidityComponent implements OnInit {
  @Input() value: number;

  heightValue: string;

  ngOnInit(): void {
    this.heightValue = `bottom: ${((80 - 16) * this.value) / 100}px`;
  }
}
