import { languageType } from "./languageModel";
import { ICoordinate } from "./openweathermap";


export interface IState {
    searchCity: string[],
    language: languageType,
    popUpAdd: boolean,
}

export interface IAppStore {
    state: IState;
}