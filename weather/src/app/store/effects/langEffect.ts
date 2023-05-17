import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map, mergeMap } from "rxjs";
import { EAppActionTypes } from "../actions/actions";
import { TranslocoService } from "@ngneat/transloco";
import { Store } from "@ngrx/store";
import { IAppStore } from "../models/stateModel";
import { selectLanguage } from "../selectors/selectors";

@Injectable()
export class LangChangeEffects {
    changeLang$ = createEffect(
        () => this.actions$.pipe(
            ofType(EAppActionTypes.ChangeLanguage),
            mergeMap(() =>
                this.store.select(selectLanguage).pipe(
                    map(lang => this.langService.setActiveLang(lang))
                )
            )),
        { dispatch: false }
    )

    constructor(
        private actions$: Actions,
        private langService: TranslocoService,
        private store: Store<IAppStore>
    ) { }
}