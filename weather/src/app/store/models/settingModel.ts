export type languageType = 'en' | 'ru';
export type unitsType = 'metric' | 'imperial';
export type popUpType = 'add' | 'setting' | 'infoWeather' | 'search';

export interface ILang {
    value: languageType;
    img: string;
}

export interface IUnits {
    value: unitsType;
    text: '℃' | '℉';
}

export interface ISetting {
    language: languageType;
    units: unitsType;
}

export interface IPopUp {
    popUpState: boolean;
    type: popUpType;
    item?: number,
}

export interface IOpenPopUp {
    popUpType: popUpType,
    item?: number,
}