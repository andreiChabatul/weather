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
                searchCity: [...action.payload],
            };
        }
        default:
            return state;
    }
};