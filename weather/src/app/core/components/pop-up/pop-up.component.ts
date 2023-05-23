import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { ClosePopUpAdd } from 'src/app/store/actions/actions';
import { popUpType } from 'src/app/store/models/settingModel';
import { IAppStore } from 'src/app/store/models/stateModel';
import { selectPopUp } from 'src/app/store/selectors/selectors';

@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.scss']
})
export class PopUpComponent implements OnInit, OnDestroy {

  statePopUp$ = this.store.select(selectPopUp);
  isOpen: boolean;
  type: popUpType;
  substriction$: Subscription;

  constructor(private store: Store<IAppStore>) { }

  closePopUp() {
    this.store.dispatch(new ClosePopUpAdd());
  }
  ngOnInit(): void {
    this.substriction$ = this.statePopUp$.subscribe(
      value => {
        this.type = value.type;
        this.isOpen = value.popUpState;
      }
    )
  }

  ngOnDestroy(): void {
    this.substriction$.unsubscribe();
  }
}
