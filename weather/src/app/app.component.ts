import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  {
  title = 'weather';
  // @ViewChild('canvas', { static: true }) myCanvas!: ElementRef;

  // ngOnInit(): void {
  //   const canvas: HTMLCanvasElement = this.myCanvas.nativeElement;
  //   const context = canvas.getContext('2d');

  //   if (context) {
  //     this.#drawCanvas(context)
  //   }

  // }

  // #drawCanvas(ctx: CanvasRenderingContext2D) {

  //   ctx.beginPath();
  //   ctx.arc(25, 25, 25, 1.5 * Math.PI, Math.PI, true);
  //   ctx.lineTo(0, 320);
  //   ctx.arc(25, 320, 25, Math.PI, 0.5 * Math.PI, true);
  //   ctx.lineTo(550, 345);
  //   ctx.moveTo(310, 310);
  //   ctx.arc(300, 320, 60, 2.7, 0.45, true);

  //   ctx.moveTo(550, 345);
  //   ctx.arc(575, 320, 25, 0.5 * Math.PI, 0, true);
  //   ctx.lineTo(600, 25);
  //   ctx.arc(575, 25, 25, 0, 1.5 * Math.PI, true);
  //   ctx.lineTo(25, 0);
  //   ctx.fillStyle = "rgba(100,150,185,0.3)";
  //   ctx.fill();
  // }


}
