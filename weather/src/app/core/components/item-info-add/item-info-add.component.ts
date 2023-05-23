import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { OpenPopUpAdd } from 'src/app/store/actions/actions';
import { IAppStore } from 'src/app/store/models/stateModel';

@Component({
  selector: 'app-item-info-add',
  templateUrl: './item-info-add.component.html',
  styleUrls: ['./item-info-add.component.scss']
})
export class ItemInfoAddComponent {

  constructor(private store: Store<IAppStore>) { }

  openPopUp() {
    this.store.dispatch(new OpenPopUpAdd('add'));
  }

}
