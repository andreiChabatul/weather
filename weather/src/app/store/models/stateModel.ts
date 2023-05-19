import { languageType } from "./languageModel";


export interface IState {
    searchCity: string[],
    mainCity: string,
    language: languageType,
    popUpAdd: boolean,
}

export interface IAppStore {
    state: IState;
}