import { createSelector } from '@ngrx/store';
import { IAppStore, IState } from '../models/stateModel';

const select = (state: IAppStore) => state.state

export const selectAllCity = createSelector(select, (state: IState) => state.searchCity);
export const selectLanguage = createSelector(select, (state: IState) => state.language);
export const selectPopUpAdd = createSelector(select, (state: IState) => state.popUpAdd);