import { ActionReducerMap } from "@ngrx/store";
import { IAppStore, IState } from "./models/stateModel";

export const stateApp: IState = {
    searchCity: [],
}

export const initalState: IAppStore = {
    state: stateApp,
};

export function getInitalState(): IAppStore {
    return initalState;
}

// export const appReducers: ActionReducerMap<IAppStore, any> = {
//     state: Reducers,
// };