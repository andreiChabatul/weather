import { Action } from "@ngrx/store";
import { IOpenPopUp, languageType, unitsType } from "../models/settingModel";
import { IOpenweathermapForecastFive } from "../models/openweathermap";

export enum EAppActionTypes {
    AddSearchCity = '[SEARCH CITY ADD] AddSearchCity',
    CleanSearchCity = '[SEARCH CITY CLEAN] CleanSearchCity',
    ChangeLanguage = '[CHANGE LANGUAGE] ChangeLanguage',
    ChangeUnits = '[CHANGE UNITS] ChangeUnits',
    OpenPopUp = '[OPEN POPUP] OpenPopUp',
    ClosePopUp = '[Close POPUP] ClosePopUp',
    AddItemForecast = '[ADD ITEM FORECAST] AddItemForecast',
    AddFavorite = '[ADD CITY FAVORITE] AddFavorite',
}


export class CleanSearchCity implements Action {
    readonly type = EAppActionTypes.CleanSearchCity;
}

export class AddSearchCity implements Action {
    readonly type = EAppActionTypes.AddSearchCity;
    constructor(public payload: string) { }
}

export class ChangeLanguage implements Action {
    readonly type = EAppActionTypes.ChangeLanguage;
    constructor(public payload: languageType) { }
}

export class ChangeUnits implements Action {
    readonly type = EAppActionTypes.ChangeUnits;
    constructor(public payload: unitsType) { }
}

export class OpenPopUp implements Action {
    readonly type = EAppActionTypes.OpenPopUp;
    constructor(public payload: IOpenPopUp) { }
}

export class AddFavorite implements Action {
    readonly type = EAppActionTypes.AddFavorite;
    constructor(public payload: string) { }
}

export class ClosePopUp implements Action {
    readonly type = EAppActionTypes.ClosePopUp;
}

export class AddItemForecast implements Action {
    readonly type = EAppActionTypes.AddItemForecast;
    constructor(public payload: IOpenweathermapForecastFive) { }
}

export type ActionUnion = CleanSearchCity | AddSearchCity | ChangeLanguage | OpenPopUp | ClosePopUp | ChangeUnits | AddItemForecast | AddFavorite;