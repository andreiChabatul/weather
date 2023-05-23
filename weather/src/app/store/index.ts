import { ActionReducerMap } from "@ngrx/store";
import { IAppStore, IState } from "./models/stateModel";
import { Reducers } from "./reducers/reducers";

export const stateApp: IState = {
    searchCity: [],
    language: 'en',
    popUp:
    {
        popUpState: false,
        type: 'setting'
    },
}

export const initalState: IAppStore = {
    state: stateApp,
};

export function getInitalState(): IAppStore {
    return initalState;
}

export const appReducers: ActionReducerMap<IAppStore, any> = {
    state: Reducers,
};