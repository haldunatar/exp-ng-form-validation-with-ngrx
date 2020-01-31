import { createAction, props } from '@ngrx/store';

export const formsRegister = createAction(
  '[Forms] Register',
  props<{ form }>()
);

export const formsUpdate = createAction('[Forms] Update', props<{ form }>());
