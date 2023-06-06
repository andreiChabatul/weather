export type LanguageType = 'en' | 'ru';
export type UnitsType = 'metric' | 'imperial';
export type PopUpType = 'add' | 'setting' | 'infoWeather';

export interface ILang {
  value: LanguageType;
  img: string;
}

export interface IUnits {
  value: UnitsType;
  text: '℃' | '℉';
}

export interface ISetting {
  language: LanguageType;
  units: UnitsType;
}

export interface IPopUp {
  popUpState: boolean;
  type: PopUpType;
  item?: number;
}

export interface IOpenPopUp {
  popUpType: PopUpType;
  item?: number;
}
