import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer,
  createReducer,
  on,
  Action
} from '@ngrx/store';
import { environment } from '../../../environments/environment';

import * as formActions from '../actions/forms.actions';
export interface State {}

export const initialState: State = {
  form: null
};

const forms = createReducer(
  initialState,
  on(formActions.formsRegister, (state, action) => ({
    ...state,
    form: action.form
  })),
  on(formActions.formsUpdate, (state, action) => ({
    ...state,
    form: action.form
  }))
);

export function reducer(state: State | undefined, action: Action) {
  return forms(state, action);
}

export const reducers: ActionReducerMap<State> = { forms };

export const metaReducers: MetaReducer<State>[] = !environment.production
  ? []
  : [];

export const appState = createFeatureSelector<State>('forms');

export const getFormsState = createSelector(
  appState,
  (state: any) => state.form
);

// Harc coded temp...
export const getmyTextFieldErrorState = createSelector(
  getFormsState,
  (state: any) => state.myTextField.errors
);

export const getmyOtherTextFieldErrorState = createSelector(
  getFormsState,
  (state: any) => state.myOtherTextField.errors
);
