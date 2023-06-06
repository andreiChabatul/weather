import { stateApp } from '..';
import { ActionUnion, EAppActionTypes } from '../actions/actions';
import { ICoordinate } from '../models/openweathermap';
import { IState } from '../models/stateModel';

export const Reducers = (state = stateApp, action: ActionUnion): IState => {
  switch (action.type) {
    case EAppActionTypes.CleanSearchCity: {
      return {
        ...state,
        searchCity: [],
      };
    }
    case EAppActionTypes.AddSearchCity: {
      return {
        ...state,
        searchCity: [...new Set([...state.searchCity, action.payload])],
      };
    }
    case EAppActionTypes.ChangeLanguage: {
      return {
        ...state,
        language: action.payload,
      };
    }
    case EAppActionTypes.AddItemForecast: {
      return {
        ...state,
        forecastWeather: action.payload,
      };
    }
    case EAppActionTypes.AddFavorite: {
      const result: ICoordinate[] = [...state.favoriteCity];
      if (
        result.find((coor) => coor.name === action.payload.name) ===
          undefined ||
        result.length === 0
      ) {
        result.push(action.payload);
      }
      return {
        ...state,
        favoriteCity: result.slice(-5),
      };
    }
    case EAppActionTypes.ChangeUnits: {
      return {
        ...state,
        units: action.payload,
      };
    }
    case EAppActionTypes.OpenPopUp: {
      return {
        ...state,
        popUp: {
          popUpState: true,
          type: action.payload.popUpType,
          item: action.payload.item,
        },
      };
    }
    case EAppActionTypes.SelectFavorite: {
      const index = state.favoriteCity.indexOf(action.payload);
      const resultArr = [...state.favoriteCity];
      resultArr.splice(index, 1);
      return {
        ...state,
        favoriteCity: [...resultArr, action.payload],
      };
    }
    case EAppActionTypes.DeleteFavorite: {
      return {
        ...state,
        favoriteCity: state.favoriteCity.filter(
          (coor) => coor.lat !== action.payload.lat
        ),
      };
    }
    case EAppActionTypes.ClosePopUp: {
      return {
        ...state,
        popUp: {
          popUpState: false,
          type: 'setting',
        },
      };
    }
    default:
      return state;
  }
};
