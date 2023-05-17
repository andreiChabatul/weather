import { Action } from "@ngrx/store";
import { languageType } from "../models/languageModel";


export enum EAppActionTypes {
    AddSearchCity = '[SEARCH CITY ADD] AddSearchCity',
    CleanSearchCity = '[SEARCH CITY CLEAN] CleanSearchCity',
    AddMainCity = '[MAIN CITY ADD] AddMainCity',
    ChangeLanguage = '[CHANGE LANGUAGE] ChangeLanguage',
}


export class CleanSearchCity implements Action {
    readonly type = EAppActionTypes.CleanSearchCity;
}

export class AddSearchCity implements Action {
    readonly type = EAppActionTypes.AddSearchCity;
    constructor(public payload: string) { }
}

export class AddMainCity implements Action {
    readonly type = EAppActionTypes.AddMainCity;
    constructor(public payload: string) { }
}

export class ChangeLanguage implements Action {
    readonly type = EAppActionTypes.ChangeLanguage;
    constructor(public payload: languageType) { }
}


export type ActionUnion = CleanSearchCity | AddSearchCity | AddMainCity | ChangeLanguage;