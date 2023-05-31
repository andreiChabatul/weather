import { ActionReducerMap } from "@ngrx/store";
import { IAppStore, IState } from "./models/stateModel";
import { Reducers } from "./reducers/reducers";
import { IOpenweathermapForecastFive } from "./models/openweathermap";

export const stateApp: IState = {
    searchCity: [],
    language: 'en',
    units: 'metric',
    popUp:
    {
        popUpState: false,
        type: 'setting'
    },
    forecastWeather: {} as IOpenweathermapForecastFive,
    favoriteCity: ['Минск', 'Новосибирск', 'Пенза'],
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