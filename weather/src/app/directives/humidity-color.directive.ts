import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appHumidityColor]'
})
export class HumidityColorDirective implements OnInit {

  @Input() humidity: number;

  constructor(private el: ElementRef) { }

  ngOnInit(): void {
    let color = '#01893B'
    this.humidity < 40 ? color = '#D3D70E' : '';
    this.humidity > 69 ? color = '#B63338' : '';
    this.el.nativeElement.style.color = color;
  }

}
