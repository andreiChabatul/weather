import { Action } from "@ngrx/store";


export enum EAppActionTypes {
    AddSearchCity = '[SEARCH CITY ADD] AddSearchCity',
    CleanSearchCity = '[SEARCH CITY CLEAN] CleanSearchCity',
    AddMainCity = '[MAIN CITY ADD] AddMainCity',
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


export type ActionUnion = CleanSearchCity | AddSearchCity | AddMainCity;