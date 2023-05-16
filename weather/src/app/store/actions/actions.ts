import { Action } from "@ngrx/store";


export enum EAppActionTypes {
    AddSearchCity = '[SEARCH CITY ADD] AddSearchCity',
    CleanSearchCity = '[SEARCH CITY CLEAN] CleanSearchCity',
}


export class CleanSearchCity implements Action {
    readonly type = EAppActionTypes.CleanSearchCity;
}

export class AddSearchCity implements Action {
    readonly type = EAppActionTypes.AddSearchCity;
    constructor(public payload: string) { }
}


export type ActionUnion = CleanSearchCity | AddSearchCity;