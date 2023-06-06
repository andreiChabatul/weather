import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-control-history',
  templateUrl: './control-history.component.html',
  styleUrls: ['./control-history.component.scss'],
})
export class ControlHistoryComponent {
  @Input() type: boolean;
}
