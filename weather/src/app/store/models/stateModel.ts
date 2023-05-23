import { IPopUp, languageType, unitsType } from "./settingModel";

export interface IState {
    searchCity: string[],
    language: languageType,
    units: unitsType,
    popUp: IPopUp,
}

export interface IAppStore {
    state: IState;
}