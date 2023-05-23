import { IPopUp, languageType } from "./settingModel";

export interface IState {
    searchCity: string[],
    language: languageType,
    popUp: IPopUp,
}

export interface IAppStore {
    state: IState;
}