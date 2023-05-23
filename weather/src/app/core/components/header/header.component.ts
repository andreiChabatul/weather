import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { OpenPopUpAdd } from 'src/app/store/actions/actions';
import { IAppStore } from 'src/app/store/models/stateModel';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(private store: Store<IAppStore>) { }

  openPopUp() {
    this.store.dispatch(new OpenPopUpAdd('setting'));
  }

}
