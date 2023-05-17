import { languageType } from "./languageModel";


export interface IState {
    searchCity: string[],
    mainCity: string,
    language: languageType,
}

export interface IAppStore {
    state: IState;
}