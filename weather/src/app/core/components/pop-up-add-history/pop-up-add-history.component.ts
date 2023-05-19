import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { ClosePopUpAdd } from 'src/app/store/actions/actions';
import { IAppStore } from 'src/app/store/models/stateModel';
import { selectPopUpAdd } from 'src/app/store/selectors/selectors';

@Component({
  selector: 'app-pop-up-add-history',
  templateUrl: './pop-up-add-history.component.html',
  styleUrls: ['./pop-up-add-history.component.scss']
})
export class PopUpAddHistoryComponent {

  statePopUp$ = this.store.select(selectPopUpAdd);

  constructor(private store: Store<IAppStore>) { }

  closePopUp(event: Event) {
    this.store.dispatch(new ClosePopUpAdd());
  }
}
