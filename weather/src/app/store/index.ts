import { ActionReducerMap } from "@ngrx/store";
import { IAppStore, IState } from "./models/stateModel";
import { Reducers } from "./reducers/reducers";

export const stateApp: IState = {
    searchCity: [],
    mainCity: '',
    language: 'en',
    popUpAdd: false,
    coorinateCity: {
        lat: 0,
        lon: 0
    }
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