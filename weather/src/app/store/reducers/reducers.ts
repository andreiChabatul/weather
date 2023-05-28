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
                    itemInfo: action.payload.item,
                },
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