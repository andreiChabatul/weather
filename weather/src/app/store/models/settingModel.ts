export type languageType = 'en' | 'ru';
export type unitsType = 'metric' | 'imperial';
export type popUpType = 'add' | 'setting';

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
}