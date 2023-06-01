import { stateApp } from "..";
import { ActionUnion, EAppActionTypes } from "../actions/actions";
import { IState } from "../models/stateModel";

export const Reducers = (
    state = stateApp,
    action: ActionUnion
): IState => {
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
            return {
                ...state,
                favoriteCity: [...new Set([...state.favoriteCity, action.payload])].slice(-5),
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
                favoriteCity: [...resultArr, action.payload]
            };
        }
        case EAppActionTypes.DeleteFavorite: {
            const index = state.favoriteCity.indexOf(action.payload);
            const resultArr = [...state.favoriteCity];
            resultArr.splice(index, 1);
            return {
                ...state,
                favoriteCity: [...resultArr]
            };
        }
        case EAppActionTypes.ClosePopUp: {
            return {
                ...state,
                popUp: {
                    popUpState: false,
                    type: 'setting'
                },
            };
        }
        default:
            return state;
    }
};