import { Action } from "@ngrx/store";
import { languageType } from "../models/languageModel";
import { ICoordinate } from "../models/openweathermap";


export enum EAppActionTypes {
    AddSearchCity = '[SEARCH CITY ADD] AddSearchCity',
    CleanSearchCity = '[SEARCH CITY CLEAN] CleanSearchCity',
    ChangeLanguage = '[CHANGE LANGUAGE] ChangeLanguage',
    OpenPopUpAdd = '[OPEN POPUP ADD] OpenPopUpAdd',
    ClosePopUpAdd = '[Close POPUP ADD] ClosePopUpAdd',
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

export class OpenPopUpAdd implements Action {
    readonly type = EAppActionTypes.OpenPopUpAdd;
}

export class ClosePopUpAdd implements Action {
    readonly type = EAppActionTypes.ClosePopUpAdd;
}

export type ActionUnion = CleanSearchCity | AddSearchCity | ChangeLanguage | OpenPopUpAdd | ClosePopUpAdd;