import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { GeocodingApiService } from "src/app/core/services/geocoding-api.service";
import { IAppStore } from "../models/stateModel";
import { Store } from "@ngrx/store";
import { AddCoordinateCity, EAppActionTypes } from "../actions/actions";
import { map, mergeMap } from "rxjs";
import { selectMainCity } from "../selectors/selectors";

@Injectable()

export class CoordinateSetEffects {

    city$ = this.store.select(selectMainCity);
    value: string;

    coorLang$ = createEffect(
        () => this.actions$.pipe(
            ofType(EAppActionTypes.AddMainCity),
            mergeMap(() => this.geocodingApiService.getCoordinate(this.value).pipe(
                map(value => new AddCoordinateCity({ lat: value[0].lat, lon: value[0].lon }),
                )))
        )
    )

    constructor(
        private actions$: Actions,
        private geocodingApiService: GeocodingApiService,
        private store: Store<IAppStore>
    ) {
        this.city$.subscribe(value => this.value = value);
    }
}