import { ICoordinate, IOpenweathermapForecastFive } from "./openweathermap";
import { IPopUp, languageType, unitsType } from "./settingModel";

export interface IState {
    searchCity: string[],
    language: languageType,
    units: unitsType,
    popUp: IPopUp,
    forecastWeather: IOpenweathermapForecastFive,
    favoriteCity: ICoordinate[],
}

export interface IAppStore {
    state: IState;
}