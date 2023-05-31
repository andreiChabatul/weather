import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { OpenPopUp } from 'src/app/store/actions/actions';
import { IAppStore } from 'src/app/store/models/stateModel';

@Component({
  selector: 'app-phone-main',
  templateUrl: './phone-main.component.html',
  styleUrls: ['./phone-main.component.scss']
})
export class PhoneMainComponent {

  constructor(private store: Store<IAppStore>) { }

  openPopUp() {
    this.store.dispatch(new OpenPopUp({ popUpType: 'search' }));
  }
}
