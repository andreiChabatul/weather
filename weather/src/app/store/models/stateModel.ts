import { ICoordinate, IOpenweathermapForecastFive } from './openweathermap';
import { IPopUp, LanguageType, UnitsType } from './settingModel';

export interface IState {
  searchCity: string[];
  language: LanguageType;
  units: UnitsType;
  popUp: IPopUp;
  forecastWeather: IOpenweathermapForecastFive;
  favoriteCity: ICoordinate[];
}

export interface IAppStore {
  state: IState;
}
