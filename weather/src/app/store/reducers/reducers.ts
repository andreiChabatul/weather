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
        case EAppActionTypes.AddMainCity: {
            return {
                ...state,
                mainCity: action.payload,
            };
        }
        case EAppActionTypes.ChangeLanguage: {
            return {
                ...state,
                language: action.payload,
            };
        }
        case EAppActionTypes.OpenPopUpAdd: {
            return {
                ...state,
                popUpAdd: true,
            };
        }
        case EAppActionTypes.ClosePopUpAdd: {
            return {
                ...state,
                popUpAdd: false,
            };
        }
        case EAppActionTypes.AddCoordinateCity: {
            console.log(action.payload)
            return {
                ...state,
                coorinateCity: action.payload,
            };
        }
        default:
            return state;
    }
};