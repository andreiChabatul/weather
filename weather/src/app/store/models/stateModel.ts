import { languageType } from "./languageModel";
import { ICoordinate } from "./openweathermap";


export interface IState {
    searchCity: string[],
    mainCity: string,
    language: languageType,
    popUpAdd: boolean,
    coorinateCity: ICoordinate,
}

export interface IAppStore {
    state: IState;
}