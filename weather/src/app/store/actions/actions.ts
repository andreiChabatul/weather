import { Action } from '@ngrx/store';
import { IOpenPopUp, LanguageType, UnitsType } from '../models/settingModel';
import {
  ICoordinate,
  IOpenweathermapForecastFive,
} from '../models/openweathermap';

export enum EAppActionTypes {
  AddSearchCity = '[SEARCH CITY ADD] AddSearchCity',
  CleanSearchCity = '[SEARCH CITY CLEAN] CleanSearchCity',
  ChangeLanguage = '[CHANGE LANGUAGE] ChangeLanguage',
  ChangeUnits = '[CHANGE UNITS] ChangeUnits',
  OpenPopUp = '[OPEN POPUP] OpenPopUp',
  ClosePopUp = '[Close POPUP] ClosePopUp',
  AddItemForecast = '[ADD ITEM FORECAST] AddItemForecast',
  AddFavorite = '[ADD CITY FAVORITE] AddFavorite',
  SelectFavorite = '[SELECT CITY FAVORITE] SelectFavorite',
  DeleteFavorite = '[DELETE CITY FAVORITE] DeleteFavorite',
}

export class CleanSearchCity implements Action {
  readonly type = EAppActionTypes.CleanSearchCity;
}

export class AddSearchCity implements Action {
  readonly type = EAppActionTypes.AddSearchCity;

  constructor(public payload: string) {}
}

export class ChangeLanguage implements Action {
  readonly type = EAppActionTypes.ChangeLanguage;

  constructor(public payload: LanguageType) {}
}

export class ChangeUnits implements Action {
  readonly type = EAppActionTypes.ChangeUnits;

  constructor(public payload: UnitsType) {}
}

export class OpenPopUp implements Action {
  readonly type = EAppActionTypes.OpenPopUp;

  constructor(public payload: IOpenPopUp) {}
}

export class AddFavorite implements Action {
  readonly type = EAppActionTypes.AddFavorite;

  constructor(public payload: ICoordinate) {}
}

export class ClosePopUp implements Action {
  readonly type = EAppActionTypes.ClosePopUp;
}

export class SelectFavorite implements Action {
  readonly type = EAppActionTypes.SelectFavorite;

  constructor(public payload: ICoordinate) {}
}

export class DeleteFavorite implements Action {
  readonly type = EAppActionTypes.DeleteFavorite;

  constructor(public payload: ICoordinate) {}
}

export class AddItemForecast implements Action {
  readonly type = EAppActionTypes.AddItemForecast;

  constructor(public payload: IOpenweathermapForecastFive) {}
}

export type ActionUnion =
  | CleanSearchCity
  | AddSearchCity
  | ChangeLanguage
  | OpenPopUp
  | ClosePopUp
  | ChangeUnits
  | AddItemForecast
  | AddFavorite
  | SelectFavorite
  | DeleteFavorite;
