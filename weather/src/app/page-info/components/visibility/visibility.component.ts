import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-visibility',
  templateUrl: './visibility.component.html',
  styleUrls: ['./visibility.component.scss'],
})
export class VisibilityComponent {
  @Input() value: number;
}
