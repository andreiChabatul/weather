import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { IAppStore } from 'src/app/store/models/stateModel';

@Component({
  selector: 'app-phone-main',
  templateUrl: './phone-main.component.html',
  styleUrls: ['./phone-main.component.scss']
})
export class PhoneMainComponent {

  constructor(private store: Store<IAppStore>) { }

}
