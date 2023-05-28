import { IItemForecast } from "./openweathermap";

export type languageType = 'en' | 'ru';
export type unitsType = 'metric' | 'imperial';
export type popUpType = 'add' | 'setting' | 'infoWeather';

export interface ILang {
    value: languageType;
    img: string;
}

export interface IUnits {
    value: unitsType;
    text: '℃' | '℉';
}

export interface IPopUp {
    popUpState: boolean;
    type: popUpType;
    itemInfo?: IItemForecast,
}

export interface IOpenPopUp {
    popUpType: popUpType,
    item?: IItemForecast
}